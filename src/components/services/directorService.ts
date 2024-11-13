import { fetchAPI } from "../utils/api";

// add type
export const getDirectors = (search?: string) => {
    return fetchAPI(`directors/${search || ''}`)
}