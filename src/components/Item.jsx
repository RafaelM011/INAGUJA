import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeSelectedItem } from "../slices/listSlice";
import { addNewData, defineDatosTabla} from "../slices/orderSlice";

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
            <summary id={`#${data.id}`} className="font-semibold cursor-pointer list-none py-1 flex place-content-between" onClick={changeChecked}> 
                <h1 className="text-white w-3/5"> {data['Código Producto']} - {data['Descripción Producto']} </h1> 
                <input className="w-[18px] cursor-pointer observed" type="radio" name="catalog" id={data.id} onClick={(e) => selectedItem(e)}/>
            </summary>
            <div className="text-gray-400 font-thin"> {data['Definición de Producto']} </div>
        </details>
    )
}

export const OrderItem = (props) => {
    const {id} = props;
    const dispatch = useDispatch();
    const itemElement = document.getElementById(`item${id}`);
    const itbisElement = document.getElementById(`itbis${id}`);

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

    const updateDatoTabla = (e) => {
        const target = e.target;
        const nombre = target.name;
        const info = target.value;
        if(nombre === 'codigo') itemElement.value = id+1
        if(nombre === 'precio') itbisElement.value = info*0.18;
        dispatch(defineDatosTabla({id,nombre,info}))
    }
    
    return(
        <div className="flex place-content-around my-4 py-2 border-l-2 border-r-2 border-dashed">
            <input disabled id={`item${id}`} name='item' className="disabled:bg-slate-300 outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Item" onBlur={updateDatoTabla}/>
            <input name='codigo' className="outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Código" onBlur={updateDatoTabla}/>
            <input name='descripcion' className="outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Descripción" onBlur={updateDatoTabla}/>
            <input name='cantidad' className="outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Cantidad" onBlur={updateDatoTabla}/>
            <input name='unidad' className="outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Unidad" onBlur={updateDatoTabla}/>
            <input name='precio' type='number' className="outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="Precio" onBlur={updateDatoTabla}/>
            <input disabled id={`itbis${id}`} name='itbis' className="disabled:bg-slate-300 outline-none rounded-2xl pl-4 w-[12%] border-secondary border-l-4" placeholder="ITBIS" onBlur={updateDatoTabla}/>
        </div>
    )
}