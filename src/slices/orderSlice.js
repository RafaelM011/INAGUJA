import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const serverURl = process.env.NODE_ENV === 'production' ? 'https://inaguja-server-production.up.railway.app/' : 'http://localhost:4000/';

const initialState = [

]

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {

    },
    extraReducers(builder){
        builder
            .addCase(createOrder.fulfilled, (state,action) => {

            })
    }
})

export const createOrder = createAsyncThunk('order/createorder', async (orderData) => {
    const response = await
    fetch(serverURl + 'createorder', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(orderData)
    })
    .then(res => res.json())
    console.log(response);
})

export default orderSlice.reducer;