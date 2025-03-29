import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { apiRoute, baseUrl } from "../baseUrl"
import { fetchToken } from "../../hooks/localStorage"
import { toast } from "react-toastify"

const userSignUp = createAsyncThunk("sign-up/user-signUp", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl}signup`, data)
        const result =  response.data

        const authorizationHeader = response.headers.authorization;

        let accessToken = null;

        if (authorizationHeader) {
            if (authorizationHeader.startsWith('Bearer ')) {
                accessToken = authorizationHeader.split(' ')[1];  // Split to get the token part
            } else {
                console.warn('Unexpected format for Authorization header:', authorizationHeader);
            }
        } else {
            console.warn('Authorization header not found');
        }

        localStorage.setItem("buy-gas", JSON.stringify(accessToken));
        return result
    } catch (error) {
        const message = error.response.data.status.message
        console.log(message)
        if(error.response){
            toast(message, {type: "error"})
            return rejectWithValue({message: message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})


export const adminSignIn = createAsyncThunk("sign-in/admin-signIn", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl}admins`, data)
        const result =  response.data

        const authorizationHeader = response.headers.authorization;

        let accessToken = null;

        if (authorizationHeader) {
            if (authorizationHeader.startsWith('Bearer ')) {
                accessToken = authorizationHeader.split(' ')[1];  // Split to get the token part
            } else {
                console.warn('Unexpected format for Authorization header:', authorizationHeader);
            }
        } else {
            console.warn('Authorization header not found');
        }

        localStorage.setItem("buy-gas", JSON.stringify(accessToken));
        return result
    } catch (error) {
        const message = error.response.data.status.message
        console.log(message)
        if(error.response){
            toast(message, {type: "error"})
            return rejectWithValue({message: message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})




export const userProfile = createAsyncThunk("auth/user-profile", async(data, {rejectWithValue}) => {
    try {

        const response = await axios.get(`${baseUrl + apiRoute}users/user_profile`, {  
            headers: {
          "Authorization": `Bearer ${fetchToken()}`
      }})

        const result =  response.data
        console.log(result)

        return result
    } catch (error) {
        if(error.response){
            return rejectWithValue({message: error.response.message})
        }

        return rejectWithValue({message: "something went wrong"})

    }
})




const userLogin = createAsyncThunk("login/user-login", async(data, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl + apiRoute}users/app_access`, data);

        const result = response.data;

        console.log(result)

       
        localStorage.setItem("gaswaka", JSON.stringify(result.token));
        toast(result?.message || "Logged In", {type: "success"})


        return result.data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
            toast( "Server Error", {type: "error"})
            return rejectWithValue({ message: error.response.data });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});




export const adminLogin = createAsyncThunk("login/admin-login", async(value, {rejectWithValue}) => {
    try {
        const response = await axios.post(`${baseUrl + apiRoute}admins/login`, value);

        const {data, token} = response.data;

        console.log(data)

       
        localStorage.setItem("gaswaka", JSON.stringify(token));
        toast("Logged In", {type: "success"})


        return data;
    } catch (error) {
        if (error.response) {
            console.log(error.response.data)
            toast( "Server Error", {type: "error"})
            return rejectWithValue({ message: error.response.data });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});



export const userLogout = createAsyncThunk("logout/user-logout", async(_, {rejectWithValue}) => {
    try {

        const response = await axios.delete(`${baseUrl}logout`,{
            headers: {
                "Authorization":  `Bearer ${fetchToken()}`
            }
        });

        const {data} = response.data;

        localStorage.removeItem("bitglobal");
        toast(data, {type: "success"})

        return data;
    } catch (error) {
        if (error.response) {
            return rejectWithValue({ message: error.response.data.message });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});







export {userSignUp, userLogin}