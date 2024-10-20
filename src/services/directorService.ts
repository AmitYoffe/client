import { fetchAPI } from "../utils/api";

export const getDirectors = async (search?: string) => {
    return fetchAPI(`directors/${search || ''}`)
}