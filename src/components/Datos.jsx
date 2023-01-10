import React from "react";
import Select from "react-select";

export default function Datos(){
    const optionsTipo = [
        {label: 'Orden de Compra' , value: 'Orden de Compra' },
        {label: 'Orden de Servicio' , value: 'Orden de Servicio' }
    ]
    const optionsModalidad = [
        {label: 'Compra por debajo del umbral' , value: 'Compra por debajo del umbral' },
        {label: 'Compra menor' , value: 'Compra menor' }
    ]
    const optionsPago = [
        {label: 'Transferencia' , value: 'Transferencia' },
        {label: 'Cheque' , value: 'Cheque' }
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


    return(
        <div className="flex place-content-around bg-primary w-inherit h-[500px] p-4 m-2 gap-6">
            <div className="h-inherit w-4/12 border-2 border-white rounded-2xl flex flex-col gap-2 pl-4 py-2">
                <h1 className="text-white text-xl font-semibold self-center">-- Datos generales -- </h1>
                <h1 className="text-white font-medium">Referencia del proceso</h1>
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Referencia del proceso"/>
                
                <h1 className="text-white font-medium">Fecha</h1>                
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='date'/>
                
                <h1 className="text-white font-medium">Tipo de orden</h1>
                <Select className="w-8/12 font-medium" options={optionsTipo} styles={customStyles} defaultValue={{label:"Tipo de orden", value:"Tipo de orden"}}/>
                
                <h1 className="text-white font-medium">Numero de orden</h1>
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Numero de orden"/>
                
                <h1 className="text-white font-medium">Descripción del proceso</h1>
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Descripcion del proceso"/>
                
                <h1 className="text-white font-medium">Modalidad del proceso</h1>
                <Select className="w-8/12 font-medium" options={optionsModalidad} styles={customStyles} defaultValue={{label:"Modalidad del proceso", value:"Modalidad del proceso"}}/>
            </div>
            <div className="h-inherit w-4/12 border-2 border-white rounded-2xl flex flex-col gap-2 pl-4 py-2">
                <h1 className="text-white text-xl font-semibold self-center">-- Datos del proveedor -- </h1>
                <h1 className="text-white font-medium">Razon social</h1>    
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Razon socialo"/>
                
                <h1 className="text-white font-medium">RNC</h1>                
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="RNC"/>
                
                <h1 className="text-white font-medium">Nombre comercial</h1>
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Nombre comercial"/>

                <h1 className="text-white font-medium">Domicilio comercial</h1>
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Domicilio comercial"/>
                
                <h1 className="text-white font-medium">Telefono</h1>
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='text' placeholder="Telefono"/>   
            </div>
            <div className="h-inherit w-4/12 border-2 border-white rounded-2xl flex flex-col gap-2 pl-4 py-2">
                <h1 className="text-white text-xl font-semibold self-center">-- Datos del contrato -- </h1>
                <h1 className="text-white font-medium">Anticipo</h1>                
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='number' placeholder="Anticipo"/>
                
                <h1 className="text-white font-medium">Forma de pago</h1>
                <Select className="w-8/12 font-medium" options={optionsPago} styles={customStyles} defaultValue={{label:"Forma de pago", value:"Forma de pago"}}/>

                <h1 className="text-white font-medium">Plazo</h1>
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='number' placeholder="Plazo"/>
                
                <h1 className="text-white font-medium">Monto</h1>
                <input className="w-8/12 h-[30px] outline-none rounded-xl px-4" type='number' placeholder="Monto"/>   
            </div>
        </div>
    )
}