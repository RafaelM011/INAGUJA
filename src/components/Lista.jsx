import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import search from "../assets/search.png";
import { selectList } from "../slices/listSlice";
import { Item } from "./Item";

export default function Lista() {
    const items = useSelector(selectList);
    const [filteredItems, setFilteredItems] = useState([]);
    const render = filteredItems.map(item => {
        return <Item key={item.id} data={item}/>
    })

    useEffect(() => {
        if(items.length > 0) setFilteredItems(items)
    },[items])

    const updateFilteredItems = (e) => {
        const target = e.target;
        const value = target.value;
        const filtered = items.filter(item => item['Código Producto'].toString().includes(value))

        setFilteredItems(filtered)
    }
    
    return(
        <div className="h-[550px] w-full md:w-1/2 bg-primary">
            <h1 className="text-white font-semibold text-xl px-6 py-4"> Descripción, sinonimo o código</h1>
            <input className="ml-6 w-4/5 h-[28px] outline-secondary rounded-xl px-4" type="text" placeholder="Codigo" onChange={updateFilteredItems}/> 
            <img src={search} alt="search" className="inline w-[28px] ml-4 cursor-pointer hover:scale-125"/>
            <div className="w-4/5 h-[400px] ml-6 mt-4 overflow-auto scrollbar-hide border-2 border-white rounded-xl py-4 px-2">
                {render.slice(0,20)}
            </div>
        </div>
    )
}