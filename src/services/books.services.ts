import { booksDatabase, getId } from "../database/database";
import {
  IBooks,
  TCreateBook,
  TGetOneBook,
  TUpdateBook,
} from "../interfaces/interfaces";

interface IBooksServices {
  create(body: TCreateBook): IBooks;
  get(): IBooks[];
  getOne(id: string): IBooks;
  delete(id: string): void;
  update(id: string, body: TUpdateBook): IBooks;
}

export class BooksServices implements IBooksServices {
  create(body: TCreateBook): IBooks {
    const date = new Date();

    const newBook: IBooks = {
      id: getId(),
      name: body.name,
      pages: body.pages,
      category: body.category,
      createdAt: date,
      updatedAt: date,
    };

    booksDatabase.push(newBook);

    return newBook;
  }

  get(): IBooks[] {
    return booksDatabase;
  }

  getOne(id: string): IBooks {
    const foundBook = booksDatabase.find((book) => {
      return book.id === Number(id);
    }) as IBooks;

    return foundBook;
  }

  delete(id: string): void {
    const index = booksDatabase.findIndex((book) => {
      return book.id === Number(id);
    });

    booksDatabase.splice(index, 1);
  }

  update(id: string, body: TUpdateBook): IBooks {
    const currentBook = booksDatabase.find(
      (book) => book.id === Number(id),
    ) as IBooks;

    const index = booksDatabase.findIndex((book) => book.id === Number(id));

    const date = new Date();

    const newBook: IBooks = { ...currentBook, ...body, updatedAt: date };

    booksDatabase.splice(index, 1, newBook);

    return newBook;
  }
}
