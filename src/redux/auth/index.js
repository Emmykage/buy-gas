import { createSlice } from "@reduxjs/toolkit"
import { adminLogin, userLogin, userLogout, userProfile, userSignUp } from "../actions/auth"

const initialState = {
    user: null,
    logged: false,
    loading: true
}

const AuthSlice = createSlice({
    initialState,
    name: "auth",
    reducers: {
        resetUser: (state) =>  {
            return{
                ...state,
                user: JSON.parse(localStorage.getItem("buy-gas"))


            }
        }
        , 
        addUser: (state, action) =>  {
            localStorage.setItem("buy-gas", JSON.stringify(action.payload))
            return{
                ...state,
                user: action.payload,


            }
        }
    }
    ,
    extraReducers: (builder) =>  {
        builder
        .addCase(userSignUp.fulfilled, (state, action) => {
            return{
                ...state,
                user: action.payload.data,
                logged: true,
                loading: false
            }
        })
        .addCase(userSignUp.rejected, (state, action) => {

            return{
                ...state,
                // message: action.payload.message,
                loading: false
            }
        })
        .addCase(userSignUp.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
        .addCase(userLogin.fulfilled, (state, action) => {
            return{
                ...state,
                user: action.payload.data,
                logged: true,
                loading: false

            }
        })
        .addCase(userLogin.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false

            }
        })
        .addCase(userLogin.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
        .addCase(userProfile.fulfilled, (state, action) => {
            return{
                ...state,
                user: action.payload.data,
                logged: true,
                loading: false
            }
        })  .addCase(userProfile.pending, (state) => {
               return{
                ...state,
                loading: true
            }
        })
        .addCase(userProfile.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                logged: false,
                loading: false
            }
        })
        .addCase(userLogout.fulfilled, (state) => {
            return{
                ...state,
                user: null,
                logged: false,
                loading: false
            }
        })
        .addCase(adminLogin.fulfilled, (state, action) => {
            return{
                ...state,
                user: action.payload.data,
                logged: true,
                loading: false
            }
        })
        .addCase(adminLogin.rejected, (state) => {

            return{
                ...state,
                // message: action.payload.message,
                loading: false
            }
        })
        .addCase(adminLogin.pending, (state) => {
            return{
                ...state,
                loading: true,
            }
        })
    }

})


export default AuthSlice.reducer 
export const {resetUser, addUser} = AuthSlice.actions