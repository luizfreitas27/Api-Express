import { Router } from "express";
import { BooksControllers } from "../controllers/books.controller";
import { IsValidBook } from "../middlewares/isBookValid.middleware";
import { IsCreateBodyDefined } from "../middlewares/isCreateBodyDefined.middlewares";
import { IsBookCreated } from "../middlewares/isBookCreated.middlewares";
import { IsBookUpdateValid } from "../middlewares/isBookUpdateValid.middlewares";

export const booksRouter = Router();

const routesController = new BooksControllers();


booksRouter.post("/",IsCreateBodyDefined.execute, IsBookCreated.execute, routesController.createBookController);
booksRouter.get("/", routesController.getAllBooksController);
booksRouter.get("/:id", IsValidBook.execute, routesController.getOneBookController);
booksRouter.delete("/:id", IsValidBook.execute, routesController.deleteBookController);
booksRouter.patch("/:id", IsValidBook.execute, IsBookUpdateValid.execute, routesController.updateBookController);
