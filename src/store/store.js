import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../slices/listSlice.js";
import filterReducer from "../slices/filterSlice.js";
import orderReducer from "../slices/orderSlice.js";

export const store = configureStore({
    reducer: {
        list: listReducer,
        filter: filterReducer,
        order: orderReducer
    }
})