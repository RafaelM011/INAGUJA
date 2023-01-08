import React from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { selectClases, selectFamilias, selectSegmentos } from "../slices/listSlice";
import { selectClase, selectFamilia, selectFilterOptions, selectSegmento, setClase, setFamilia, setSegmento } from "../slices/filterSlice";
import { useState } from "react";
import { useEffect } from "react";

export default function Selector(props){
    const {element, id} = props;
    const dispatch = useDispatch();
    const filterOptions = useSelector(selectFilterOptions);
    const segmento = useSelector(selectSegmento);
    const familia = useSelector(selectFamilia);
    const clase = useSelector(selectClase);
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
        //Materia 10-15 Equipos 20-27 Componentes 30-41 Producto 42-60 Servicio 70-94
        let filtered, start, end;
        if(filterOptions.servicios === true){
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '70'){
                    start = i;
                    return true;
                }
            })
            filtered = list.slice(start,list.length+1)
            setFiltered(filtered)
        }
        else if(filterOptions.componente === true){
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '30'){
                    start = i;
                    return true;
                }
            })
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '42'){
                    end = i;
                    return true;
                }
            })
            filtered = list.slice(start,end)
            setFiltered(filtered)
        }
        else if(filterOptions.equipo === true){
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '20'){
                    start = i;
                    return true;
                }
            })
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '30'){
                    end = i;
                    return true;
                }
            })
            filtered = list.slice(start,end)
            setFiltered(filtered)
        }
        else if(filterOptions.materia === true){
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '10'){
                    start = i;
                    return true;
                }
            })
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '20'){
                    end = i;
                    return true;
                }
            })
            filtered = list.slice(start,end)
            setFiltered(filtered)
        }
        else if(filterOptions.producto === true){
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '42'){
                    start = i;
                    return true;
                }
            })
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '70'){
                    end = i;
                    return true;
                }
            })
            filtered = list.slice(start,end)
            setFiltered(filtered)
        }else{
            list.some((item,i) => {
                if(item.Segmento.slice(0,2) === '70'){
                    end = i;
                    return true;
                }
            })
            filtered = list.slice(0,end)
            setFiltered(filtered)
        }
    },[filterOptions])

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
        <Select 
            defaultValue={{label:`Seleccione ${element}`, value:`Seleccione ${element}`}} 
            value={id === 1 ? {label:segmento, value:segmento} : id === 2 ? {label:familia, value:familia} : {label:clase, value:clase}}
            options={options} 
            maxMenuHeight={200} 
            styles={styles} 
            onChange={updateEntry} 
            className="w-4/5 ml-4"
        />
    )
}