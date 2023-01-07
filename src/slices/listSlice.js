import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const serveURl = 'http://localhost:4000/';

const initialState = {
    items: [

    ],
    selected: {

    }
}

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        changeSelectedItem(state,action){
            state.selected = action.payload;
        }
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

export const { changeSelectedItem } = listSlice.actions;
export const selectList = state => state.list.items;
export default listSlice.reducer;