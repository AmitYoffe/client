import { Director } from "./director";

export interface Movie extends MovieDto {
  id: number;
}

export interface MovieDto {
  title: string;
  director: Director | string;
  year: number;
}
