import axios from "axios";
import { get } from "../../../api";
import { Stock } from "../../types";
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getApiBaseURL } from "../../../configurations";
export const getStock = (id: string) => get<{}, Stock>(`stocks/${id}`)
export const getStocks = () => get<{}, Stock[]>('stocks')
export const getStcokApi = createApi({
    reducerPath: 'stock',
    baseQuery: fetchBaseQuery({ baseUrl: getApiBaseURL() ?? "" }),
    endpoints: (builder) => ({
        getStockById: builder.query<Stock, string>({
            query: (id) => `stocks/${id}`,
        }),
    }),
})

export const { useGetStockByIdQuery } = getStcokApi