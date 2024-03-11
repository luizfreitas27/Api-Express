export interface IBooks{
  id: number;
  name: string;
  pages: number;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
};

export  type TCreateBook = Omit<IBooks, "id" | "createdAt" | "updatedAt">;
export type TUpdateBook = Partial<TCreateBook>;
export type TGetOneBook = IBooks | undefined;
