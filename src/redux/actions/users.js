import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { apiRoute, baseUrl } from "../baseUrl"
import { fetchToken } from "../../hooks/localStorage"
import { toast } from "react-toastify"




export const getAgents = createAsyncThunk("auth/get-agents", async(_, {rejectWithValue}) => {
    try {

        const response = await axios.get(`${baseUrl + apiRoute}users/get_agents`, {  
            headers: {
          "Authorization": `Bearer ${fetchToken()}`
      }})

        const {data} =  response.data
        console.log(data)

        return data
    } catch (error) {
        if(error.response){
            return rejectWithValue({message: error.response.message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})


export const getUsers = createAsyncThunk("user/get-users", async(_, {rejectWithValue}) => {
    try {

        const response = await axios.get(`${baseUrl + apiRoute}users`, {  
            headers: {
          "Authorization": `Bearer ${fetchToken()}`
      }})

        const {data} =  response.data
        console.log(data)

        return data
    } catch (error) {
        if(error.response){
            return rejectWithValue({message: error.response.message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})
export const createAgent = createAsyncThunk("create-user/create-agent", async(rawData, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl+apiRoute}users`, rawData)
        const {data} =  response.data   
        console.log("first, ddd", data)

        return data
    } catch (error) {
        const message = error.response.data.message
        console.log(message)
        if(error.response){
            toast(message ?? "Error occured", {type: "error"})
            return rejectWithValue({message: message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})