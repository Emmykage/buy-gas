import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppReducer, AuthReducer, locationReducer, OrderRducer, statisticsReducer, UserReducer } from ".";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    auth: AuthReducer,
    app: AppReducer,
    order: OrderRducer,
    user: UserReducer,
    statistic: statisticsReducer,
    location: locationReducer

})


const store = configureStore(
    { reducer: rootReducer},
    applyMiddleware(thunk, logger)
)

export default store