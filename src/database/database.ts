import { IBooks } from "../interfaces/interfaces";

export const booksDatabase: IBooks[] = [];

let id: number = 0; 

export const getId = () => {
  id++;
  return id;
}


