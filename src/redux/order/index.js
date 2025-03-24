import { createSlice } from "@reduxjs/toolkit"
import { createOrder, getOrder, getOrders, getUserOrders, updateOrder } from "../actions/order"

const initialState = {
    order: {},
    orders: [],
    logged: false,
    loading: true
}

const OrderSlice = createSlice({
    initialState,
    name: "order",
    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state, action) => {
            return{
                ...state,
                order: action.payload,
                loading: false
            }
        })
        .addCase(createOrder.rejected, (state) => {
            return{
                ...state,
                loading: false
            }
        })
        .addCase(createOrder.pending, (state) => {
            return{
                ...state,
                loading: true
            }
        }) 
        .addCase(getOrder.fulfilled, (state, action) => {
            return{
                ...state,
                order: action.payload,
                loading: false
            }
        })
        .addCase(getOrder.rejected, (state) => {
            return{
                ...state,
                loading: false
            }
        })
        .addCase(getOrder.pending, (state) => {
            return{
                ...state,
                loading: true
            }
        })
        .addCase(getOrders.fulfilled, (state, action) => {
            return{
                ...state,
                loading: true,
                orders: action.payload
            }
        })
        .addCase(getOrders.rejected, (state) => {
            return{
                ...state,
                loading: false
            }
        })
        .addCase(getOrders.pending, (state) => {
            return{
                ...state,
                loading: true
            }
        })
        .addCase(updateOrder.fulfilled, (state, action) => {
            return{
                ...state,
                loading: true,
                orders: action.payload
            }
        }).addCase(updateOrder.rejected, (state) => {
            return{
                ...state,
                loading: false
            }
        })
        .addCase(updateOrder.pending, (state) => {
            return{
                ...state,
                loading: true
            }
        })
        .addCase(getUserOrders.fulfilled, (state, action) => {
            return{
                ...state,
                orders: action.payload
            }
        } )

        

    },
    reducers: {
        resetUser: (state) =>  {
            return{
                ...state,
                amount: {},


            }
        }
        , 
        // createOrder: (state, action) =>  {
        //     return{
        //         ...state,
        //         amount: action.payload,


        //     }
        // }
    }
}
)

export default OrderSlice.reducer
