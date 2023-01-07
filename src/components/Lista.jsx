import React from "react";
import { useSelector } from "react-redux";
import search from "../assets/search.png";
import { selectList } from "../slices/listSlice";
import { Item } from "./Item";

export default function Lista() {
    const items = useSelector(selectList);
    const filteredItems = items.filter(item => true)
    const render = filteredItems.map(item => {
        return <Item key={item.id} data={item}/>
    })
    return(
        <div className="h-[550px] w-full md:w-1/2 bg-primary">
            <h1 className="text-white font-semibold text-xl px-6 py-4"> Descripción, sinonimo o código</h1>
            <input className="ml-6 w-4/5 h-[28px] outline-secondary rounded-xl px-4" type="text"/> 
            <img src={search} alt="search" className="inline w-[28px] ml-4 cursor-pointer hover:scale-125"/>
            <div className="w-4/5 h-[400px] ml-6 mt-4 overflow-auto scrollbar-hide border-2 border-white rounded-xl py-4 px-2">
                {render.slice(0,20)}
            </div>
        </div>
    )
}