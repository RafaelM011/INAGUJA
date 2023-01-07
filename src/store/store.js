import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../slices/listSlice.js";

export const store = configureStore({
    reducer: {
        list: listReducer   
    }
})