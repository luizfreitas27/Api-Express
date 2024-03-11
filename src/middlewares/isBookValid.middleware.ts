import { NextFunction, Request, Response } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/errors";

export class IsValidBook {
  static execute(req: Request, res: Response, next: NextFunction){
    if(!booksDatabase.some(book => book.id === Number(req.params.id))){
      throw new AppError(404, "Book not found.")
    }

    next();
  }
}
