export type ApiResponse<T> = {
    status: boolean,
    data: T
}

export type Stock = {
    _id:string,
    name: string,
    lastTradedPrice: number,
    todaysHigh: number,
    todaysLow: number
}

export type InitialStateType = {
    stock: Stock,
    stocks: Stock[],
    stockId:string
}