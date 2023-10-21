import axios, { AxiosResponse } from "axios";
import { getApiBaseURL } from "../configurations";
import { ApiResponse, Stock } from "../features/types";

const url = getApiBaseURL()
export const get = <T,R>(endpoint: string, params?: T) => axios.get<ApiResponse<R>>(`${url}${endpoint}`)