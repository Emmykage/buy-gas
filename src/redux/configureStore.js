import { applyMiddleware, combineReducers, configureStore } from "@reduxjs/toolkit";
import { AppReducer, AuthReducer } from ".";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

const rootReducer = combineReducers({
    auth: AuthReducer,
    app: AppReducer

})


const store = configureStore(
    { reducer: rootReducer},
    applyMiddleware(thunk, logger)
)

export default store