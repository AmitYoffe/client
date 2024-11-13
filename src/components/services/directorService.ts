import { fetchAPI } from "../utils/index";

// add type
export const getDirectors = (search?: string) => {
    return fetchAPI(`directors/${search || ''}`)
}