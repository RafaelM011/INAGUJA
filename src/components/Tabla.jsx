import React from "react";
import { useState } from "react";
import add from "../assets/add.png";
import { OrderItem } from "./Item";

export default function Tabla(){
    const [renderAmount, setRenderAmount] = useState(1);
    const render = [];
    for(let i = 0; i < renderAmount;i++){
        render.push(<OrderItem key={i} id={i}/>)
    }

    return(
        <div className="bg-primary w-inherit h-[500px] px-4 mx-2 py-8 gap-6">
            <div className="flex place-content-around rounded-tl-3xl rounded-br-3xl border-r-2 border-l-2 border-b-2">
                <span className="text-white w-[12%] text-center">Item</span>
                <span className="text-white w-[12%] text-center">Código</span>
                <span className="text-white w-[12%] text-center">Descripción</span>
                <span className="text-white w-[12%] text-center">Cantidad</span>
                <span className="text-white w-[12%] text-center">Unidad</span>
                <span className="text-white w-[12%] text-center">Precio</span>
                <span className="text-white w-[12%] text-center">ITBIS</span>
            </div>
            <div className="mt-4 h-[350px] overflow-auto border-y-2">
                {render}
            </div>
            <img className="w-[25px] h-[25px] cursor-pointer mt-4 ml-4" src={add} alt="add element" onClick={() => setRenderAmount(prevState => prevState + 1)}/>
        </div>
    )
}