import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoute, baseUrl } from "../baseUrl";
import { fetchToken } from "../../hooks/localStorage";
import { toast } from "react-toastify";

export const createOrder = createAsyncThunk("create-order/create-order", async( data, {rejectWithValue})=> {
    try {
        const response = await axios.post(baseUrl+apiRoute + "orders", data, {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            },
        })

        const result = response.data 
        console.log(result)
        return result
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

        const result = response.data 
        console.log(result)
        return result
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
            toast(error.response.data.message ?? error.response.statusText ?? "Errror found", {type: "error"})
            return rejectWithValue({message: error.response.data.message})

        }
        return rejectWithValue({message: "An unexpected error occurred"})

        
    }
})

export const getOrders = createAsyncThunk("order/get-orders", async( _, {rejectWithValue})=> {
    try {
        const response = await axios.post(baseUrl+apiRoute + "orders", {
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
        const response = await axios.post(baseUrl+apiRoute + "orders/user", {
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


