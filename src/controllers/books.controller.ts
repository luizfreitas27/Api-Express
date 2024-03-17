import { Request, Response, response } from "express";
import { BooksServices } from "../services/books.services";

export class BooksControllers {
  createBookController(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const response = bookService.create(req.body);

    return res.status(201).json(response);
  }

  getAllBooksController(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const response = bookService.get();

    return res.status(200).json(response);
  }

  getOneBookController(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const response = bookService.getOne(req.params.id);

    return res.status(200).json(response);
  }

  deleteBookController(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    bookService.delete(req.params.id);

    return res.status(204).json();
  }

  updateBookController(req: Request, res: Response): Response {
    const bookService = new BooksServices();

    const response = bookService.update(req.params.id, req.body);

    return res.status(200).json(response);
  }
}
