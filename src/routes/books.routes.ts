import { Router } from "express";
import { BooksControllers } from "../controllers/books.controller";
import { IsValidBook } from "../middlewares/isBookValid.middleware";
import { IsBookCreated } from "../middlewares/isBookCreated.middlewares";
import { IsValidRequest } from "../middlewares/isValideRequest.middlewares";
import {
  bookCreateSchema,
  bookUpdateSchema,
} from "../schemas/createBookBody.schema";

export const booksRouter = Router();

const routesController = new BooksControllers();

booksRouter.post(
  "/",
  IsValidRequest.execute({ body: bookCreateSchema }),
  IsBookCreated.execute,
  routesController.createBookController,
);
booksRouter.get("/", routesController.getAllBooksController);
booksRouter.get(
  "/:id",
  IsValidBook.execute,
  routesController.getOneBookController,
);
booksRouter.delete(
  "/:id",
  IsValidBook.execute,
  routesController.deleteBookController,
);
booksRouter.patch(
  "/:id",
  IsValidRequest.execute({ body: bookUpdateSchema }),
  IsValidBook.execute,
  IsBookCreated.execute,
  routesController.updateBookController,
);
