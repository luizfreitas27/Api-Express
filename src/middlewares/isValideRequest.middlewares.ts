import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

interface IRequestSchemas {
  params?: AnyZodObject;
  body?: AnyZodObject;
  query?: AnyZodObject;
}

export class IsValidRequest {
  static execute(schema: IRequestSchemas) {
    return async (req: Request, res: Response, next: NextFunction) => {
      if (schema.body) {
        req.body = await schema.body.parseAsync(req.body);
      }

      if (schema.params) {
        req.params = await schema.params.parseAsync(req.params);
      }

      if (schema.query) {
        req.query = await schema.query.parseAsync(req.query);
      }

      next();
    };
  }
}
