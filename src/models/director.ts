import { Movie } from "./movie";

export interface Director extends DirectorDto {
  id: number;
}

export interface DirectorDto {
  firstName: string;
  lastName: string;
  movies: Movie[];
}
