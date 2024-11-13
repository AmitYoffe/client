import { fetchAPI } from "../utils/api";

export const getMovies = (search?: string) => {
    return fetchAPI(`movies/${search || ''}`)
}