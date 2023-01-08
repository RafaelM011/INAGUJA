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
    const [renderAmount, setRenderAmount] = useState(100);
    const [observedElement, setObservedElement] = useState();
    const render = filteredItems.map((item,i) => {
        return <Item key={item.id} data={item} update={updateElement} render={renderAmount} index={i}/>
    })
    const lastItemObserver = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            setRenderAmount(prevState => prevState + 100)
            lastItemObserver.unobserve(entries[0].target)
        }
    },{
        root: document.getElementById('container')
    });

    useEffect(() => {
        if(items.length > 0) setFilteredItems(items)
    },[items])

    useEffect(()=>{
        if(observedElement) lastItemObserver.observe(observedElement)
    },[observedElement])

    function updateElement(id){
        const element = document.getElementById(id);
        setObservedElement(element)
    }

    const updateFilteredItems = (e) => {
        const target = e.target;
        const value = target.value;
        const filtered = items.filter(item => {
            return (
                item['Código Producto'].toString().includes(value) || 
                item["Descripción Producto"].toLowerCase().includes(value.toLowerCase()) 
                // item["Definición de Producto"].toLowerCase().includes(value.toLowerCase())    
            )
        })
        document.getElementById('container').scrollTop = 0;
        
        setFilteredItems(filtered)
        setRenderAmount(100)
    }
    
    return(
        <div className="h-[550px] w-full md:w-1/2 bg-primary">
            <h1 className="text-white font-semibold text-xl px-6 py-4"> Descripción, sinonimo o código</h1>
            <input className="ml-6 w-4/5 h-[28px] outline-secondary rounded-xl px-4" type="text" placeholder="Codigo" onChange={updateFilteredItems}/> 
            <img src={search} alt="search" className="inline w-[28px] ml-4 cursor-pointer hover:scale-125"/>
            <div id="container" className="w-4/5 h-[400px] ml-6 mt-4 overflow-auto scrollbar-hide border-2 border-white rounded-xl py-4 px-2">
                {render.slice(0,renderAmount)}
            </div>
        </div>
    )
}