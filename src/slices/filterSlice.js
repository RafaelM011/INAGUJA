import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Bienes: false,
    Servicios: false,
    Componente: false,
    Equipo: false,
    Materia: false,
    Producto: false,
    Segmento: "",
    Familia: "",
    Clase: ""
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers:{

    }
})

export const selectFilterOptions = state => state.filter;
export default filterSlice.reducer;