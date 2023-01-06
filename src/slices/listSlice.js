import { createSlice } from "@reduxjs/toolkit";
import XLSX from 'xlsx';

const file = XLSX.readFile('Guia_Con_Auxiliar.xlsx');  
const sheets = file.SheetNames;
let data = XLSX.utils.sheet_to_json(file.Sheets[sheets[0]]);

const initialState = {
    items: data
}

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        
    }
})

export default listSlice.reducer;