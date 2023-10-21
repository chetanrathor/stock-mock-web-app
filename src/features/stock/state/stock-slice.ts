import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getStock, getStocks } from "../api";
import { InitialStateType } from "../../types";

export const fetchALLStock = createAsyncThunk('stocks', async (argument, { rejectWithValue }) => {
    try {
        const response = await getStocks()
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const fetchStock = createAsyncThunk('stock/:id', async (argument: string, { rejectWithValue }) => {
    try {
        console.log('first', )

        const response = await getStock(argument)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

const initialState = {
        stock: {_id:'default'},
        stocks: new Array(),
        stockId:''

    } as unknown as InitialStateType


export const stockSlice = createSlice({
    name: 'stocks/slice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchALLStock.fulfilled, (state, { payload }) => {

            const { data } = payload
            return {
                ...state,
                stockId:data[0]._id ?? '',
                stocks: data
            }
        })
        builder.addCase(fetchStock.fulfilled, (state, { payload }) => {
            return {
                ...state,
                stock: payload.data
            }
        })
    },

    reducers: {
        setStockId:(state,action:PayloadAction<string>)=>{
            return {...state,stockId:action.payload}
        }
    },
})


export const stockReducer = stockSlice.reducer
export const { setStockId } = stockSlice.actions   

