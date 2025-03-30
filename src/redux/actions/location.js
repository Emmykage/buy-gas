import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { apiRoute, baseUrl } from "../baseUrl";
import { fetchToken } from "../../hooks/localStorage";

export const createLocations = createAsyncThunk("location/create-location", async(locationData, {rejectWithValue})=> {
    
    try {
        const response = await axios.post(baseUrl + apiRoute + "/locations", locationData,  {
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


export const updateLocation = createAsyncThunk("location/update-location", async({id, locationData}, {rejectWithValue})=> {
    
    try {
        const response = await axios.patch(`${baseUrl + apiRoute}locations/${id}`, locationData,  {
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



export const getLocations = createAsyncThunk("location/get-locations", async(_, {rejectWithValue})=> {

    console.log("Fetching from:", baseUrl + apiRoute + "locations"), fetchToken();
    try {
        const response = await axios.get(baseUrl + apiRoute + "/locations",  {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            }
    
        })

        console.log(response)
        const data = response.data


        return data 
    } catch (error) {
        console.log(error)
        if(error?.response){
            return rejectWithValue({message: error.response.data.message ?? "Failed to get"})
        }
        return rejectWithValue({message: "Failed to create: Something went wrong"})

    }
   
})


export const delLocation = createAsyncThunk("location/del-locations", async(id, {rejectWithValue})=> {
    
    try {
        const response = await axios.delete(baseUrl + apiRoute + "/locations/" + id,  {
            headers: {
                "Authorization": `Bearer ${fetchToken()}`
            }
    
        })

        const data = response.data

        return data 
    } catch (error) {
        if(error?.response){
            return rejectWithValue({message: error.response.data.message ?? "Failed to delete"})
        }
        return rejectWithValue({message: "Failed to create: Something went wrong"})

    }
   
})

