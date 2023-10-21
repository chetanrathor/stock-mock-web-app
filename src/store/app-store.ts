import { configureStore } from '@reduxjs/toolkit'
import { stockReducer } from '../features/stock/state/stock-slice'

const store = configureStore({
    reducer: {
        stock: stockReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export default store