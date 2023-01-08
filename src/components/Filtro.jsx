import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFilterOptions, setOptions } from "../slices/filterSlice";
import Selector from "./SelectInput";

export default function Filtro() {
    const filterOptions = useSelector(selectFilterOptions);
    const dispatch = useDispatch();

    useEffect(() => {
        const buttons = document.querySelectorAll('.button2')
        if(filterOptions.bienes === true) {
            buttons.forEach(element => element.disabled = false)
        }else{
            buttons.forEach(element => element.disabled = true)            
        }
    },[filterOptions])

    const updateButton = (e) => {
        const target = e.target;
        const value = target.innerHTML;
        dispatch(setOptions(value))
    }

    return(
        <div className="h-[550px] w-full md:w-1/2 bg-primary py-3">
            <div className="flex place-content-evenly py-2 px-2">
                <button className={`w-2/5 text-white border-2 ${filterOptions.bienes === true ? "border-secondary" : "border-white"} rounded-xl p-2 enabled:hover:scale-[95%] enabled:hover:border-secondary`} onClick={updateButton}>Bienes</button>
                <button className={`w-2/5 text-white border-2 ${filterOptions.servicios === true ? "border-secondary" : "border-white"} rounded-xl p-2 enabled:hover:scale-[95%] enabled:hover:border-secondary`} onClick={updateButton}>Servicios</button>
            </div>
            <div className="flex place-content-evenly py-2 px-2 flex-wrap gap-2">
                <button className={`button2 w-1/5 min-w-[115px] text-white border-2 ${filterOptions.componente === true ? "border-secondary" : "border-white"} rounded-xl p-2 enabled:hover:scale-[95%] enabled:hover:border-secondary disabled:opacity-70`} onClick={updateButton}>Componente / Suministro</button>
                <button className={`button2 w-1/5 min-w-[115px] text-white border-2 ${filterOptions.equipo === true ? "border-secondary" : "border-white"} rounded-xl p-2 enabled:hover:scale-[95%] enabled:hover:border-secondary disabled:opacity-70`} onClick={updateButton}>Equipo industrial</button>
                <button className={`button2 w-1/5 min-w-[115px] text-white border-2 ${filterOptions.materia === true ? "border-secondary" : "border-white"} rounded-xl p-2 enabled:hover:scale-[95%] enabled:hover:border-secondary disabled:opacity-70`} onClick={updateButton}>Materia prima</button>
                <button className={`button2 w-1/5 min-w-[115px] text-white border-2 ${filterOptions.producto === true ? "border-secondary" : "border-white"} rounded-xl p-2 enabled:hover:scale-[95%] enabled:hover:border-secondary disabled:opacity-70`} onClick={updateButton}>Producto uso final</button>
            </div>
            <h1 className="text-white text-xl font-semibold px-4 py-2 mt-2"> Segmento - </h1>
            <Selector element='el segmento' id={1} key={1}/>
            <h1 className="text-white text-xl font-semibold px-4 py-2 mt-2"> Familia - </h1>
            <Selector element='la familia' id={2} key={2}/>
            <h1 className="text-white text-xl font-semibold px-4 py-2 mt-2"> Clase - </h1>
            <Selector element='la clase' id={3} key={3}/>
        </div>
    )
}