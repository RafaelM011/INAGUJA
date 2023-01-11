import React from "react";
import { useDispatch } from "react-redux";
import Select from "react-select";
import { defineDatosContrato, defineDatosGenerales, defineDatosProveedor } from "../slices/orderSlice";

export default function Datos(){
    const optionsTipo = [
        {label: 'Orden de Compra' , value: 'Orden de Compra' , name:'tipo'},
        {label: 'Orden de Servicio' , value: 'Orden de Servicio', name:'tipo' }
    ]
    const optionsModalidad = [
        {label: 'Compra por debajo del umbral' , value: 'Compra por debajo del umbral', name:'modalidad' },
        {label: 'Compra menor' , value: 'Compra menor', name:'modalidad' }
    ]
    const optionsPago = [
        {label: 'Transferencia' , value: 'Transferencia', name: "forma_de_pago" },
        {label: 'Cheque' , value: 'Cheque', name: "forma_de_pago" }
    ]
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          background: '#fff',
          borderColor: '#9e9e9e',
          minHeight: '30px',
          height: '30px',
          boxShadow: state.isFocused ? null : null,
        }),
        valueContainer: (provided, state) => ({
          ...provided,
          height: '30px',
          padding: '0 6px'
        }),
        input: (provided, state) => ({
          ...provided,
          margin: '0px',
        }),
        indicatorSeparator: state => ({
          display: 'none',
        }),
        indicatorsContainer: (provided, state) => ({
          ...provided,
          height: '30px',
        }),
    };
    const dispatch = useDispatch();

    const updateDatosGenerales = (e) => {
        const target = e?.target || e.name;
        const nombre = target?.name || target;
        const info = target?.value || e.value;
        dispatch(defineDatosGenerales({nombre,info}))
    }

    const updateDatosProveedor = (e) => {
        const target = e.target;
        const nombre = target.name;
        const info = target.value;
        dispatch(defineDatosProveedor({nombre,info}))
    }

    const updateDatosContrato = (e) => {
        const target = e?.target || e.name;
        const nombre = target?.name || target;
        const info = target?.value || e.value;
        dispatch(defineDatosContrato({nombre,info}))
    }

    return(
        <div className="flex place-content-around bg-primary w-inherit h-[500px] p-4 m-2 gap-6">
            {/* DATOS GENERALES */}
            <div className="h-inherit w-4/12 border-2 border-white rounded-2xl flex flex-col gap-2 pl-4 py-2">
                <h1 className="text-white text-xl font-semibold self-center">-- Datos generales -- </h1>
                <h1 className="text-white font-medium">Referencia del proceso</h1>
                <input name="proceso" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Referencia del proceso" onBlur={updateDatosGenerales}/>
                
                <h1 className="text-white font-medium">Fecha</h1>                
                <input name="fecha" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='date' onBlur={updateDatosGenerales}/>
                
                <h1 className="text-white font-medium">Tipo de orden</h1>
                <Select className="w-8/12 font-medium" options={optionsTipo} styles={customStyles} defaultValue={{label:"Tipo de orden", value:"Tipo de orden"}}  onChange={updateDatosGenerales}/>
                
                <h1 className="text-white font-medium">Numero de orden</h1>
                <input name="numero" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Numero de orden" onBlur={updateDatosGenerales}/>
                
                <h1 className="text-white font-medium">Descripción del proceso</h1>
                <input name="descripcion" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Descripcion del proceso" onBlur={updateDatosGenerales}/>
                
                <h1 className="text-white font-medium">Modalidad del proceso</h1>
                <Select className="w-8/12 font-medium" options={optionsModalidad} styles={customStyles} defaultValue={{label:"Modalidad del proceso", value:"Modalidad del proceso"}} onChange={updateDatosGenerales}/>
            </div>
            {/* DATOS PROVEEDOR */}
            <div className="h-inherit w-4/12 border-2 border-white rounded-2xl flex flex-col gap-2 pl-4 py-2">
                <h1 className="text-white text-xl font-semibold self-center">-- Datos del proveedor -- </h1>
                <h1 className="text-white font-medium">Razon social</h1>    
                <input name="razon" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Razon social" onBlur={updateDatosProveedor}/>
                
                <h1 className="text-white font-medium">RNC</h1>                
                <input name="rnc" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="RNC" onBlur={updateDatosProveedor}/>
                
                <h1 className="text-white font-medium">Nombre comercial</h1>
                <input name="nombre" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Nombre comercial" onBlur={updateDatosProveedor}/>

                <h1 className="text-white font-medium">Domicilio comercial</h1>
                <input name="domicilio" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Domicilio comercial" onBlur={updateDatosProveedor}/>
                
                <h1 className="text-white font-medium">Telefono</h1>
                <input name="telefono" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Telefono" onBlur={updateDatosProveedor}/>   
            </div>
            {/* DATOS CONTRATO */}
            <div className="h-inherit w-4/12 border-2 border-white rounded-2xl flex flex-col gap-2 pl-4 py-2">
                <h1 className="text-white text-xl font-semibold self-center">-- Datos del contrato -- </h1>
                <h1 className="text-white font-medium">Anticipo</h1>                
                <input name="anticipo" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='number' placeholder="Anticipo" onBlur={updateDatosContrato}/>
                
                <h1 className="text-white font-medium">Forma de pago</h1>
                <Select className="w-8/12 font-medium" options={optionsPago} styles={customStyles} defaultValue={{label:"Forma de pago", value:"Forma de pago"}} onChange={updateDatosContrato}/>

                <h1 className="text-white font-medium">Plazo en días</h1>
                <input name="plazo" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='number' placeholder="Plazo" onBlur={updateDatosContrato}/>
                
                <h1 className="text-white font-medium">Monto</h1>
                <input disabled id={`monto`} name="monto" className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='number' placeholder="Monto" onBlur={updateDatosContrato}/>   
            </div>

        </div>
    )
}