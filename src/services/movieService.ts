import { fetchAPI } from "../utils/api";

export const getMovies = async (search?: string) => {
    return fetchAPI(`movies/${search || ''}`)
}