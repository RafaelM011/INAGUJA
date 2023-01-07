import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const serveURl = 'http://localhost:4000/';

const initialState = {
    items: [

    ]
}

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        
    },
    extraReducers(builder){
        builder
            .addCase(fetchData.fulfilled, (state,action) => {
                state.items = action.payload;
            })
    }
})

export const fetchData = createAsyncThunk('list/fetchData', async (range, {rejectWithValue}) => {
    const response = await 
    fetch(serveURl + 'getdata').then(res => res.json())
    return response;
})

export const selectList = state => state.list.items;
export default listSlice.reducer;