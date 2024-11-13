import { Director } from "../models";
import { fetchAPI } from "../utils/index";

export const getDirectors = (search?: string): Promise<Director[]> => {
    return fetchAPI<Director[]>(`directors/${search || ''}`)
}