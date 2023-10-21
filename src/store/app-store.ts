import { configureStore } from '@reduxjs/toolkit'
import { stockReducer } from '../features/stock/state/stock-slice'
import { useDispatch } from 'react-redux'
import { getStcokApi } from '../features/stock/api'

const store = configureStore({
    reducer: {
        [getStcokApi.reducerPath]: getStcokApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(getStcokApi.middleware)
    }
})

export type RootState = ReturnType<typeof store.getState>
export type useAppDispatch = typeof store.dispatch
export default store