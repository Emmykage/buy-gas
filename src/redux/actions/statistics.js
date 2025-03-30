import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoute, baseUrl } from "../baseUrl";
import { fetchToken } from "../../hooks/localStorage";

export const creategasPrice = createAsyncThunk("statistics/create-prices", async(priceData, {rejectWithValue})=> {
    
    try {
        const response = await axios.post(baseUrl + apiRoute + "/statistics", priceData,  {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            }
    
        })

        const data = response.data

        return data 
    } catch (error) {
        if(error?.response){
            return rejectWithValue({message: error.response.data.message ?? "Failed to create"})
        }
        return rejectWithValue({message: "Failed to create: Something went wrong"})

    }
   
})
export const getStatistics = createAsyncThunk("stat/get-statistics", async(_, {rejectWithValue})=> {
    
    try {
        const response = await axios.get(`${baseUrl + apiRoute}statistics`,  {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            }
    
        })

        const data = response.data

        return data 
    } catch (error) {
        if(error?.response){
            return rejectWithValue({message: error.response.data.message ?? "Failed to create"})
        }
        return rejectWithValue({message: "Failed to create: Something went wrong"})

    }
   
})



export const updateGasPrice = createAsyncThunk("gasPrice/update-price", async({id, statistic}, {rejectWithValue})=> {
    
    try {
        const response = await axios.patch(`${baseUrl + apiRoute}statistics/${id}`, statistic,  {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            }
    
        })

        const data = response.data

        return data 
    } catch (error) {
        if(error?.response){
            return rejectWithValue({message: error.response.data.message ?? "Failed to create"})
        }
        return rejectWithValue({message: "Failed to create: Something went wrong"})

    }
    
   
})