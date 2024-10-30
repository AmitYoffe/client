import { Movie } from "./movie";

export interface Director {
  id: number;
  firstName: string;
  lastName: string;
  movies: Movie[];
}

export type DirectorDto = Omit<Director, "id">;
