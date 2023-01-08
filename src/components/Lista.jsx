import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import search from "../assets/search.png";
import { selectList } from "../slices/listSlice";
import { selectFilter } from "../slices/filterSlice";
import { Item } from "./Item";

export default function Lista() {
    const items = useSelector(selectList);
    const filterOptions = useSelector(selectFilter)
    const [filteredItems, setFilteredItems] = useState([]);
    const [middleFilter, setMiddleFilter] = useState([]);
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
        if(items.length > 0) setMiddleFilter(items)
    },[items])

    useEffect(() => {
        if(middleFilter.length > 0) setFilteredItems(middleFilter)
    },[middleFilter])

    useEffect(()=>{
        if(observedElement) lastItemObserver.observe(observedElement)
    },[observedElement])

    useEffect(() => {
        let filtered
        if(filterOptions.clase !== "Seleccione la clase"){
            filtered = items.filter( item => filterOptions.clase.slice(0,6) === item['Código Producto'].toString().slice(0,6))
            return setMiddleFilter(filtered)
        }
        if(filterOptions.familia !== "Seleccione la familia"){
            filtered = items.filter( item => filterOptions.familia.slice(0,4) === item['Código Producto'].toString().slice(0,4))
            return setMiddleFilter(filtered)
        }
        if(filterOptions.segmento !== "Seleccione el segmento"){
            filtered = items.filter( item => filterOptions.segmento.slice(0,2) === item['Código Producto'].toString().slice(0,2))
            return setMiddleFilter(filtered)
        }
        if(filterOptions.options.servicios === true){
            return defineRange("70","95")
        }
        if(filterOptions.options.componente === true){
            return defineRange('30','42')
        }
        if(filterOptions.options.equipo === true){
            return defineRange('20','30')            
        }
        if(filterOptions.options.materia === true){
            return defineRange('10','20')
        }
        if(filterOptions.options.producto === true){
            return defineRange('42','70')
        }
        return defineRange("0","20")
    },[filterOptions])

    function defineRange(begin, finalize){
        let filtered, start, end;
        items.some((item,i) => {
            if(item['Código Producto'].toString().slice(0,2) === begin){
                start = i;
                return true;
            }
        })
        items.some((item,i) => {
            if(item['Código Producto'].toString().slice(0,2) === finalize){
                end = i;
                return true;
            }
        })
        filtered = items.slice(start,end)
        setMiddleFilter(filtered)
    }

    function updateElement(id){
        const element = document.getElementById(id);
        setObservedElement(element)
    }

    const updateFilteredItems = (e) => {
        const target = e.target;
        const value = target.value;
        const filtered = middleFilter.filter(middle => {
            return (
                middle['Código Producto'].toString().includes(value) || 
                middle["Descripción Producto"].toLowerCase().includes(value.toLowerCase()) 
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