import React from "react";

export default function Select(props){
    const {element} = props;

    return(
        <select className="w-4/5 h-[28px] ml-4 outline-none rounded-xl pl-2">
            {/* RENDER BASED ON STORE STATUS, GOTTA FETCH */}
            <option className=""> Seleccione el {element} </option>
            <option className=""> Opcion 2 </option>
            <option> Opcion 3 </option>
            <option> Opcion 4 </option>
        </select>
    )
}