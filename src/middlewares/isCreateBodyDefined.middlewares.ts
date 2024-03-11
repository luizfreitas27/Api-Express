import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/errors";

export class IsCreateBodyDefined {
  static execute(req: Request, res: Response, next: NextFunction){
    if(!req.body.name || !req.body.pages){
      throw new AppError(409, "body parameter not defined.");
    }

    next();
  }
}
