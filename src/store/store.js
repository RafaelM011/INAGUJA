import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../slices/listSlice.js";
import filterReducer from "../slices/filterSlice.js";

export const store = configureStore({
    reducer: {
        list: listReducer,
        filter: filterReducer
    }
})