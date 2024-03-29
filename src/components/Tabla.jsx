import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import add from "../assets/add.png";
import { createOrder, selectDatos } from "../slices/orderSlice";
import { OrderItem } from "./Item";

export default function Tabla(){
    const [renderAmount, setRenderAmount] = useState(1);
    const dispatch = useDispatch();
    const orderData = useSelector(selectDatos);
    const render = [];
    for(let i = 0; i < renderAmount;i++){
        render.push(<OrderItem key={i} id={i}/>)
    }

    const generateOrder = () => {
        dispatch(createOrder(orderData));
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
            <div className="flex place-content-around items-center">
                <img className="w-[25px] h-[25px] cursor-pointer mt-4 ml-4" src={add} alt="add element" onClick={() => setRenderAmount(prevState => prevState + 1)}/>
                <button className="text-white text-xl font-semibold mt-4 border-2 rounded-full p-2 hover:border-secondary active:scale-90 active:text-secondary" onClick={generateOrder}> Generar Orden </button>
            </div>
            <a className="hidden" id='anchor' href="http://localhost:4000/download">DOWNLOAD</a>
        </div>
    )
}