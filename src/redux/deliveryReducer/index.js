import { createSlice } from "@reduxjs/toolkit"
import { createLocations, getLocations } from "../actions/location"

const initialState = {
    location: {} ,
    loading: true,
    locations: []
}


const locationSlice = createSlice({
    name: "statistics",
    initialState,
    extraReducers: builder => {
        builder.addCase(
            createLocations.fulfilled, (state, action) => {
                return{
                    ...state,
                    location: action.payload.data
                }
            }
        ).
        addCase(createLocations.rejected, (state, action) => {
            return{
                ...state,
                loading: false,
                message: action.payload.message

            }
        }).
        addCase(createLocations.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        }) 
        
    



    .addCase(
        getLocations.fulfilled, (state, action) => {
            return{
                ...state,
                locations: action.payload.data,
                loading: false
            }
        }
    ).
    addCase(getLocations.pending, (state) => {
        return{
            ...state,
            loading:true
        }
    }).
    addCase(getLocations.rejected, (state, action) => {
        return{
            ...state,
            loading: false,
            message: action.payload.message
        }
    }) 
    

}})

export default locationSlice.reducer