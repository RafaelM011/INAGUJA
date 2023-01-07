import React from "react";
import { useDispatch } from "react-redux";
import { changeSelectedItem } from "../slices/listSlice";

export const Item = (props) => {
    const {data} = props;
    const dispatch = useDispatch();

    const selectedItem = () => {
        dispatch(changeSelectedItem(data))    
    }

    return(
        <details className="px-2">
            <summary className="text-white font-semibold cursor-pointer list-none py-1 flex place-content-between"> 
                <h1 className="w-3/5"> {data['Código Producto']} - {data['Descripción Producto']} </h1> 
                <input className="w-[18px] cursor-pointer" type="radio" name="catalog" id={data.id} onClick={selectedItem}/>
            </summary>
            <div className="text-gray-400 font-thin"> {data['Definición de Producto']} </div>
        </details>
    )
}