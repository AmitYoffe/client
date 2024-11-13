import { fetchAPI } from "../utils/index";

export const getMovies = (search?: string) => {
    return fetchAPI(`movies/${search || ''}`)
}