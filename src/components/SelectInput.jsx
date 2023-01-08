import React from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { selectClases, selectFamilias, selectSegmentos } from "../slices/listSlice";
import { selectFamilia, selectFilterOptions, selectSegmento, setClase, setFamilia, setSegmento } from "../slices/filterSlice";
import { useState } from "react";
import { useEffect } from "react";

export default function Selector(props){
    const {element, id} = props;
    const dispatch = useDispatch();
    const segmento = useSelector(selectSegmento);
    const familia = useSelector(selectFamilia);
    const list = id === 1 ? useSelector(selectSegmentos) : id === 2 ? useSelector(selectFamilias) : useSelector(selectClases);
    const [filtered, setFiltered] = useState(list); 
    const styles = {
        menuList: (base) => ({
          ...base,
          "::-webkit-scrollbar": {
            display: "hidden"
          }
        })
    }
    const options = filtered.map(element => {
        return {label: element.Segmento , value: element.Segmento }
    }) 

    useEffect(() => {
        setFiltered(list)
    },[list])

    useEffect(() => {
        let filtered;
        if(id === 2){
            filtered = list.filter( item => item.Segmento.slice(0,2) === segmento.slice(0,2))
            setFiltered(filtered)
        }
        if(id === 3){
            if( familia !== ""){
                filtered = list.filter(item => item.Segmento.slice(0,4) === familia.slice(0,4))
                setFiltered(filtered)
            }
            else{
                filtered = list.filter( item => item.Segmento.slice(0,2) === segmento.slice(0,2))
                setFiltered(filtered) 
            }
        }
    },[segmento,familia])

    const updateEntry = (option) => {
        if(id === 1 ) dispatch(setSegmento(option.value))
        else if(id === 2) dispatch(setFamilia(option.value))
        else dispatch(setClase(option.value))
    }

    return(
        <Select defaultValue={{label:`Seleccione ${element}`, value:`Seleccione ${element}`}} options={options} maxMenuHeight={200} styles={styles} onChange={updateEntry} className="w-4/5 ml-4"/>
    )
}