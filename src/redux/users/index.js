import { createSlice } from "@reduxjs/toolkit"
import { createAgent, getAgents, getUsers } from "../actions/users"

const initialState = {
    agent: {},
    agents: [],
    user: {},
    users: [],
    logged: false,
    loading: false
}

const UserSlice = createSlice({
    initialState,
    name: "users",
   
    extraReducers: (builder) =>  {
        builder
      

        .addCase(createAgent.fulfilled, (state, action) => {
            return{
                ...state,
                agent: action.payload,
                loading: false
            }
        })  .addCase(createAgent.pending, (state) => {
               return{
                ...state,
                loading: true
            }
        })
        .addCase(createAgent.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        }) .addCase(getAgents.fulfilled, (state, action) => {
            return{
                ...state,
                agents: action.payload,
                loading: false
            }
        })  .addCase(getAgents.pending, (state) => {
               return{
                ...state,
                loading: true
            }
        })
        .addCase(getAgents.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        }).addCase(getUsers.fulfilled, (state, action) => {
            return{
                ...state,
                users: action.payload,
                loading: false
            }
        })  .addCase(getUsers.pending, (state) => {
               return{
                ...state,
                loading: true
            }
        })
        .addCase(getUsers.rejected, (state, action) => {
            return{
                ...state,
                message: action.payload.message,
                loading: false
            }
        })
    }

})


export default UserSlice.reducer 
// export const {resetUser, addUser} = UserSlice.actions