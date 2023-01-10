import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSelectedItem } from "../slices/listSlice";
import { addNewData, selectDatos } from "../slices/orderSlice";

export const Item = (props) => {
    const {data, update, render, index} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if(index === render - 5) update(data.id)
    },[render])

    const selectedItem = (e) => {
        e.stopPropagation()
        dispatch(changeSelectedItem(data))    
    }

    const changeChecked = () => {
        document.getElementById(data.id).click()
    }

    return(
        <details className="px-2">
            <summary id={`#${data.id}`} className="text-white font-semibold cursor-pointer list-none py-1 flex place-content-between" onClick={changeChecked}> 
                <h1 className="w-3/5"> {data['Código Producto']} - {data['Descripción Producto']} </h1> 
                <input className="w-[18px] cursor-pointer observed" type="radio" name="catalog" id={data.id} onClick={(e) => selectedItem(e)}/>
            </summary>
            <div className="text-gray-400 font-thin"> {data['Definición de Producto']} </div>
        </details>
    )
}

export const OrderItem = (props) => {
    const {id} = props;
    const dispatch = useDispatch();
    const datos = useSelector(selectDatos);
    
    useEffect(() => {
        const newData = {
            id,
            item: "",
            codigo: "",
            descripcion: "",
            cantidad: null,
            unidad: "",
            precio: null,
            itbis: null,
        }
        dispatch(addNewData(newData))
    },[])

    return(
        <div className="flex place-content-around my-4 py-2 border-l-2 border-r-2 border-dashed">
            <input className="text-white outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Item"/>
            <input className="text-white outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Código"/>
            <input className="text-white outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Descripción"/>
            <input className="text-white outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Cantidad"/>
            <input className="text-white outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Unidad"/>
            <input className="text-white outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Precio"/>
            <input className="text-white outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="ITBIS"/>
        </div>
    )
}