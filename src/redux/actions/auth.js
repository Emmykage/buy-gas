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



export const userProfile = createAsyncThunk("auth/user-profile", async(data, {rejectWithValue}) => {
    try {

        const response = await axios.get(`${baseUrl + apiRoute}users/user_profile`, {  
            headers: {
          "Authorization": `Bearer ${fetchToken()}`
      }})

      console.log(fetchToken())

        const result =  response.data
        console.log(response)

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


        return result;
    } catch (error) {
        if (error.response) {
            console.log(error.response)
            toast(error.response.data, {type: "error"})
            return rejectWithValue({ message: error.response.data });
        }
        console.error(error);
        return rejectWithValue({ message: "Something went wrong" });
    }
});



export const userLogout = createAsyncThunk("logout/user-logout", async(_, {rejectWithValue}) => {
    try {
        console.log("first")

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





// const userLogin = createAsyncThunk('user/addUser', async (data) => {
//     const response = await fetch(`${baseUrl}login`, {
//       method: 'POST',
//       headers: {
//         'Content-type': 'application/json',
//       },
//       body: JSON.stringify(data),
//     })
//      const result = await response.json()
//      const headers = response.headers
//      const authorizationHeader = headers.get('Authorization');

//      console.log(authorizationHeader)
//     return result;
//   });
//   const loginUser = createAsyncThunk('user/logUser', async (data, { rejectWithValue }) => {
//     try {
//       const response = await fetch(`${baseURL}login`, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });
//       const result = await response.json();
  
//       if (!response.ok) {
//         const errorMessage = result.error || result.message || 'unknownerror occured ';
//         return rejectWithValue({ message: errorMessage });
//       }
  
//       setToken(result.token);
//       return result;
//     } catch (error) {
//       console.error('error thrown', error);
//       return rejectWithValue({ message: 'Spmething went wrong, check your internet Connection!!' });
  
//       // throw new Error(error);
//     }
//   });


export {userSignUp, userLogin}