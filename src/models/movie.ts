import { Director } from "./director";

export interface Movie {
  id: number;
  title: string;
  director: Director | string;
  year: number;
}

export type MovieDto = Omit<Movie, "id">;
