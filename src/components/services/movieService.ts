import { Movie } from "../models";
import { fetchAPI } from "../utils/index";

export const getMovies = (search?: string): Promise<Movie[]> => {
    return fetchAPI<Movie[]>(`movies/${search || ''}`)
}