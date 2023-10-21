import { Grid, MenuItem, MenuList, Select, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import store, { RootState } from '../../../store/app-store'
import { fetchALLStock, fetchStock } from '../state/stock-slice'

const Stock = () => {
    const dispatch = useDispatch<typeof store.dispatch>()
    const { stock, stocks } = useSelector((state: RootState) => state.stock)
    const [stockId, setStockID] = useState('')
    useEffect(() => { dispatch(fetchALLStock()) }, [])
    useEffect(() => {

        if (stockId) {
            dispatch(fetchStock(stockId))
           const refreshInterval = setInterval(()=>{
                dispatch(fetchStock(stockId))
            },1000 * 60 )

            return () => {
                clearInterval(refreshInterval);
              };
        }
    },[stockId])


    return (
        <>
            <Grid container >
                <Grid item lg={6} px={2}>
                    <MenuList>
                    <Typography fontSize={14}>Select Stock</Typography>
                        <Select value={stockId} onChange={(e) => {  setStockID(e.target.value) } }>
                            <MenuItem selected value={""} >Select Stock</MenuItem>

                            {
                                stocks.map((item) => {
                                    return (

                                        <MenuItem key={item._id} selected value={item._id} >{item.name}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </MenuList>
                </Grid>
                <Grid item lg={6} px={2}>
                    <Typography fontSize={25}>{stock.name} </Typography>
                    <Grid container direction={'column'} rowGap={4}>
                        <Grid container justifyContent={'space-around'}>

                            <Grid item>
                                <Typography fontSize={14}>Current Price</Typography>
                                <Typography fontSize={20}>{stock.lastTradedPrice ?? 'NA' }</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontSize={14}>Today's High</Typography>
                                <Typography fontSize={20}>{stock.todaysHigh ?? 'NA'}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'space-around'}>

                            <Grid item>
                                <Typography fontSize={14}>Today's Low</Typography>
                                <Typography fontSize={20}>{stock.todaysLow ?? 'NA'}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontSize={14}>Upper Circuit</Typography>
                                <Typography fontSize={20}>{stock.todaysLow ?? 'NA'}</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default Stock