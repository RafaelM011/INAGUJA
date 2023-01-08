import React from "react";
import Selector from "./SelectInput";

export default function Filtro() {
    return(
        <div className="h-[550px] w-full md:w-1/2 bg-primary py-3">
            <div className="flex place-content-evenly py-2 px-2">
                <button className="w-2/5 text-white border-2 border-white rounded-xl p-2 hover:scale-[95%] hover:border-secondary"> Bienes </button>
                <button className="w-2/5 text-white border-2 border-white rounded-xl p-2 hover:scale-[95%] hover:border-secondary"> Servicios </button>
            </div>
            <div className="flex place-content-evenly py-2 px-2 flex-wrap gap-2">
                <button className="w-1/5 min-w-[115px] text-white border-2 border-white rounded-xl p-2 hover:scale-[95%] hover:border-secondary"> Componente / Suministro </button>
                <button className="w-1/5 min-w-[115px] text-white border-2 border-white rounded-xl p-2 hover:scale-[95%] hover:border-secondary"> Equipo industrial </button>
                <button className="w-1/5 min-w-[115px] text-white border-2 border-white rounded-xl p-2 hover:scale-[95%] hover:border-secondary"> Materia prima </button>
                <button className="w-1/5 min-w-[115px] text-white border-2 border-white rounded-xl p-2 hover:scale-[95%] hover:border-secondary"> Producto uso final </button>
            </div>
            <h1 className="text-white text-xl font-semibold px-4 py-2 mt-2"> Segmento - </h1>
            <Selector element='el segmento'/>
            <h1 className="text-white text-xl font-semibold px-4 py-2 mt-2"> Familia - </h1>
            <Selector element='la familia'/>
            <h1 className="text-white text-xl font-semibold px-4 py-2 mt-2"> Clase - </h1>
            <Selector element='la clase'/>
        </div>
    )
}