import { fetchAPI } from "../utils/api";

// add type
// dont use async
export const getDirectors = async (search?: string) => {
    return fetchAPI(`directors/${search || ''}`)
}