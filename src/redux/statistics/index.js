import { createSlice } from "@reduxjs/toolkit"
import { creategasPrice, getStatistics } from "../actions/statistics"

const initialState = {
    statistics: {} ,
    loading: true
}


const statisticsReducer = createSlice({
    name: "statistics",
    initialState,
    extraReducers: builder => {
        builder.addCase(
            creategasPrice.fulfilled, (state, action) => {
                return{
                    ...state,
                    statistics: action.payload.data,
                    loading: false
                }
            }
        ).
        addCase(creategasPrice.pending, (state) => {
            return{
                ...state,
                loading: false
            }
        }).
        addCase(creategasPrice.rejected, (state, action) => {
            return{
                ...state,
                loading: true,
                message: action.payload.data.message
            }
        }) 
        
    



    .addCase(
        getStatistics.fulfilled, (state, action) => {
            return{
                ...state,
                statistics: action.payload.data,
                loading: false

            }
        }
    ).
    addCase(getStatistics.rejected, (state, action) => {
        return{
            ...state,
            loading: false,
            message: action.payload.message

        }
    }).
    addCase(getStatistics.pending, (state) => {
        return{
            ...state,
            loading: true,
        }
    }) 
    

}})


export default statisticsReducer.reducer


