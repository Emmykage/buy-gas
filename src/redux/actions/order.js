import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoute, baseUrl } from "../baseUrl";
import { fetchToken } from "../../hooks/localStorage";
import { toast } from "react-toastify";

export const createOrder = createAsyncThunk("create-order/create-order", async( dataValue, {rejectWithValue})=> {
    console.log("first", dataValue)
    try {
        const response = await axios.post(baseUrl+apiRoute + "orders", dataValue, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            },
        })

        const {data} = response.data 
        return data
    } catch (error) {
        console.log(error?.response)

        if(error.response){
            toast(error.response.data.message ?? error.response.statusText ?? "Errror found", {type: "error"})
            return rejectWithValue({message: error.response.data.message})

        }
        return rejectWithValue({message: "An unexpected error occurred"})

        
    }
})

export const updateOrder = createAsyncThunk("order/update-order", async( {id, data}, {rejectWithValue})=> {
    try {
        const response = await axios.patch(`${baseUrl+apiRoute}orders/${id}`, data , {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            },
        })

        const {data} = response.data 
        console.log(data)
        return data
    } catch (error) {
        console.log(error?.response)
        if(error.response){
            toast(error.response.data.message ?? error.response.statusText ?? "Errror found", {type: "error"})
            return rejectWithValue({message: error.response.data.message})

        }
        return rejectWithValue({message: "An unexpected error occurred"})

        
    }
})

export const getOrder = createAsyncThunk("order/get-order", async( id, {rejectWithValue})=> {
    try {
        const response = await axios.get(baseUrl+apiRoute + "orders/" + id, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            },
        })

        const {data} = response.data 
        return data
    } catch (error) {
        console.log(error?.response)
        if(error.response){
            // toast(error.response.data.message ?? error.response.statusText ?? "Errror found", {type: "error"})
            return rejectWithValue({message: error.response.data.message})

        }
        return rejectWithValue({message: "An unexpected error occurred"})

        
    }
})

export const getOrders = createAsyncThunk("order/get-orders", async( _, {rejectWithValue})=> {
    try {
        const response = await axios.get(baseUrl+apiRoute + "orders", {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            },
        })

        const {data} = response.data 
        console.log(data)
        return data
    } catch (error) {
        console.log(error?.response)
        if(error.response){
            toast(error.response.data.message ?? error.response.statusText ?? "Errror found", {type: "error"})
            return rejectWithValue({message: error.response.data.message})

        }
        return rejectWithValue({message: "An unexpected error occurred"})

        
    }
})

export const getUserOrders = createAsyncThunk("order/get-user-orders", async( _, {rejectWithValue})=> {
    try {
        const response = await axios.get(baseUrl+apiRoute + "orders/user_index", {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            },
        })

        const {data} = response.data 
        console.log(data)
        return data
    } catch (error) {
        console.log(error?.response)
        if(error.response){
            toast(error.response.data.message ?? error.response.statusText ?? "Errror found", {type: "error"})
            return rejectWithValue({message: error.response.data.message})

        }
        return rejectWithValue({message: "An unexpected error occurred"})

        
    }
})


