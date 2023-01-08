import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    options: {
        bienes: false,
        servicios: false,
        componente: false,
        equipo: false,
        materia: false,
        producto: false
    },
    segmento: "",
    familia: "",
    clase: ""
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,   
    reducers:{
        setSegmento(state,action){
            state.segmento = action.payload;
            state.familia = "";
            state.clase = "";
        },
        setFamilia(state,action){
            state.familia = action.payload;
            state.clase = "";
        },
        setClase(state,action){
            state.clase = action.payload;
        },
        setOptions(state,action){
            switch(action.payload){
                case "Bienes":{
                    state.options.bienes = true;
                    state.options.servicios = false;  
                    break;  
                }
                case "Servicios":{
                    state.options.bienes = false;
                    state.options.servicios = true;  
                    state.options.componente = false;
                    state.options.equipo = false;  
                    state.options.materia = false;  
                    state.options.producto = false; 
                    break;  
                }
                case "Componente / Suministro":{
                    state.options.componente = true;
                    state.options.equipo = false;  
                    state.options.materia = false;  
                    state.options.producto = false;  
                    break;  
                }
                case "Equipo industrial":{
                    state.options.componente = false;
                    state.options.equipo = true;  
                    state.options.materia = false;  
                    state.options.producto = false;  
                    break;  
                }
                case "Materia prima":{
                    state.options.componente = false;
                    state.options.equipo = false;  
                    state.options.materia = true;  
                    state.options.producto = false;  
                    break; 
                }
                case "Producto uso final":{
                    state.options.componente = false;
                    state.options.equipo = false;  
                    state.options.materia = false;  
                    state.options.producto = true;  
                    break;  
                }
                default:   
            }
        }
    }
})

export const { setSegmento, setFamilia, setClase, setOptions} = filterSlice.actions;
export const selectFilterOptions = state => state.filter.options;
export const selectSegmento = state => state.filter.segmento;
export const selectFamilia = state => state.filter.familia;
export const selectClase = state => state.filter.clase;
export default filterSlice.reducer;