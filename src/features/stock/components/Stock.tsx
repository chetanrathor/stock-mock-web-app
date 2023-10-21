import { Button, Grid, Menu, MenuItem, MenuList, Select, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { RootState, useAppDispatch } from '../../../store/app-store'
import { useDispatch, useSelector } from 'react-redux'
import { fetchALLStock, fetchStock, setStockId } from '../state/stock-slice'
import { getStcokApi, useGetStockByIdQuery } from '../api'

const Stock = () => {
    const dispatch = useDispatch<useAppDispatch>()
    const state = useSelector((state: RootState) => state.stock)
    console.log(state)
    const [second, setSecond] = useState(0)
    // useEffect(() => {
    //     dispatch(fetchALLStock())


    // setInterval(()=>{
    //     setSecond((prev)=>{
    //         if(prev===60){
    //             return 0
    //         }
    //         return prev+1
    //     })
    // },1000)

    // }, [])
    const { data } = useGetStockByIdQuery('65336d87d3a134214e3fa5e5', { pollingInterval: 10000 })
    console.log(data)

    // useEffect(()=>{
    //     // dispatch(fetchStock(stockId))
    //     setInterval(() => {
    //         console.log('first',stockId)
    //     dispatch(fetchStock(stockId))

    // }, 1000 * 10)
    // },[stockId])




    return (
        <>
            <Grid container >
                <Grid item lg={6} px={2}>
                    <h1>{second}</h1>
                    <MenuList>
                        <Select value={'stockId'} onChange={(e) => { if (e.target.value != 'default') { dispatch(setStockId(e.target.value)) } }}>
                            <MenuItem selected value={'default'} >Select Stock</MenuItem>

                            {/* {
                                stocks.map((item) => {
                                    return (

                                        <MenuItem key={item._id} selected value={item._id} >{item.name}</MenuItem>
                                    )
                                })
                            } */}
                        </Select>
                    </MenuList>
                </Grid>
                {/* <Grid item lg={6} px={2}>
                    <Typography fontSize={25}>{stock.name} </Typography>
                    <Grid container direction={'column'} rowGap={4}>
                        <Grid container justifyContent={'space-around'}>

                            <Grid item>
                                <Typography fontSize={14}>Current Price</Typography>
                                <Typography fontSize={20}>{stock.lastTradedPrice}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontSize={14}>Today's High</Typography>
                                <Typography fontSize={20}>{stock.todaysHigh}</Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'space-around'}>

                            <Grid item>
                                <Typography fontSize={14}>Today's Low</Typography>
                                <Typography fontSize={20}>{stock.todaysLow}</Typography>
                            </Grid>
                            <Grid item>
                                <Typography fontSize={14}>Upper Circuit</Typography>
                                <Typography fontSize={20}>{stock.todaysLow}</Typography>
                            </Grid>
                        </Grid>
                      
                    </Grid>
                </Grid> */}
            </Grid>
        </>
    )
}

export default Stock