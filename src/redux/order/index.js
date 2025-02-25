import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    logged: false,
    loading: true
}

const OrderSlice = createSlice({
    initialState,
    name: "order",
    reducers: {
        resetUser: (state) =>  {
            return{
                ...state,
                amount: {},


            }
        }
        , 
        createOrder: (state, action) =>  {
            return{
                ...state,
                amount: action.payload,


            }
        }
    }
}
)

export default OrderSlice.reducer
export const {createOrder}  = OrderSlice.actions 