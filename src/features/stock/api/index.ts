import { get } from "../../../api";
import { Stock } from "../../types";
export const getStock = (id: string) => get<{}, Stock>(`stocks/${id}`)
export const getStocks = () => get<{}, Stock[]>('stocks')