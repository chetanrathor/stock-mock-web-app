import axios from "axios";
import { getApiBaseURL } from "../configurations";
import { ApiResponse } from "../features/types";

const url = getApiBaseURL()
export const get = <T,R>(endpoint: string, params?: T) => axios.get<ApiResponse<R>>(`${url}${endpoint}`)