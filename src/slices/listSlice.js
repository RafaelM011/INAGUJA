import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const serveURl = 'http://localhost:4000/';

const initialState = {
    items: [

    ],
    segmentos: [

    ],
    familias: [

    ],
    clases: [
        
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
                state.items = action.payload.data0;
                state.segmentos = action.payload.data1;
                state.familias = action.payload.data2;
                state.clases = action.payload.data3;
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
export const selectSelected = state => state.list.selected;
export const selectSegmentos = state => state.list.segmentos;
export const selectFamilias = state => state.list.familias;
export const selectClases = state => state.list.clases;
export default listSlice.reducer;