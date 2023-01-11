import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { generatePdf } from "./pdf";

const serverURL = process.env.NODE_ENV === 'production' ? 'https://inaguja-server-production.up.railway.app/' : 'http://localhost:4000/';

const initialState = {
    datos_generales: {
        proceso: "",
        fecha: "",
        tipo: "",
        numero: "",
        descripcion: "",
        modalidad: "",
    },
    datos_proveedor: {
        razon: "",
        rnc: "",
        nombre: "",
        domicilio: "",   
        telefono: "" 
    },
    datos_contrato:{
        anticipo: null,
        forma_de_pago: "",
        plazo: null,
        monto: null,
        moneda: "DOP"
    },
    datos_tabla: []
}

const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        addNewData(state,action){
            if(action.payload.id > state.datos_tabla.length - 1) state.datos_tabla.push(action.payload)
        },
        defineDatosGenerales(state,action){
            const {nombre, info} = action.payload;
            switch(nombre){
                case "proceso":
                    state.datos_generales.proceso = info;
                    break;
                case "fecha":
                    state.datos_generales.fecha = info;
                    break;
                case "tipo":
                    state.datos_generales.tipo = info;
                    break;
                case "numero":
                    state.datos_generales.numero = info;
                    break;
                case "descripcion":
                    state.datos_generales.descripcion = info;
                    break;
                case "modalidad":
                    state.datos_generales.modalidad = info;
                    break;  
                default:              
            }
        },
        defineDatosProveedor(state,action){
            const {nombre, info} = action.payload;
            switch(nombre){
                case "razon":
                    state.datos_proveedor.razon = info;
                    break;
                case "rnc":
                    state.datos_proveedor.rnc = info;
                    break;
                case "nombre":
                    state.datos_proveedor.nombre = info;
                    break;
                case "domicilio":
                    state.datos_proveedor.domicilio = info;
                    break;
                case "telefono":
                    state.datos_proveedor.telefono = info;
                    break;
                default:                
            }
        },
        defineDatosContrato(state,action){
            const {nombre, info} = action.payload;
            switch(nombre){
                case "anticipo":
                    state.datos_contrato.anticipo = info;
                    break;
                case "forma_de_pago":
                    state.datos_contrato.forma_de_pago = info;
                    break;
                case "plazo":
                    state.datos_contrato.plazo = info;
                    break;
                case "monto":
                    state.datos_contrato.monto = info;
                    break;
                default:                
            }
        },
        defineDatosTabla(state,action){
            const {id, nombre, info} = action.payload;
            switch(nombre){
                case "item":
                    state.datos_tabla[id].item = info;
                    break;
                case "codigo":
                    state.datos_tabla[id].codigo = info;
                    break;
                case "descripcion":
                    state.datos_tabla[id].descripcion = info;
                    break;
                case "cantidad":
                    state.datos_tabla[id].cantidad = info;
                    break;
                case "unidad":
                    state.datos_tabla[id].unidad = info;
                    break;  
                case "precio":
                    state.datos_tabla[id].precio = info;
                    break;
                case "itbis":
                    state.datos_tabla[id].itbis = info;
                    break;  
                default:                
            }
        },
    },
    extraReducers(builder){
        builder
            .addCase(createOrder.fulfilled, (state,action) => {

            })
    }
})

export const createOrder = createAsyncThunk('order/createorder', async (orderData) => {
    // const download = document.getElementById('anchor');
    // const response = await
    // fetch(serverURL + 'generatepdf', {
    //     method: 'put',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(orderData)
    // })
    // .then(res => {
    //     download.click();
    //     res.json()
    // })
    // console.log(response)
    generatePdf(orderData);
})

export const { addNewData, defineDatosGenerales, defineDatosProveedor, defineDatosContrato, defineDatosTabla } = orderSlice.actions;
export const selectDatos = state => state.order;
export default orderSlice.reducer;