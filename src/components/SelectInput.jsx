import React from "react";
import Select from "react-select";

export default function Selector(props){
    const {element} = props;
    const options = [
        {label: 'Opcion 1', value:'Opcion 1'},
        {label: 'Opcion 2', value:'Opcion 2'},
        {label: 'Opcion 3', value:'Opcion 3'},
        {label: 'Opcion 4', value:'Opcion 4'},
        {label: 'Opcion 5', value:'Opcion 5'},
        {label: 'Opcion 6', value:'Opcion 6'},
        {label: 'Opcion 7', value:'Opcion 7'},
        {label: 'Opcion 8', value:'Opcion 8'},
    ] 
    const styles = {
        menuList: (base) => ({
          ...base,
          "::-webkit-scrollbar": {
            display: "hidden"
          }
        })
      }

    return(
        <Select defaultValue={{label:`Seleccione ${element}`, label:`Seleccione ${element}`}} options={options} maxMenuHeight={200} styles={styles} className="w-4/5 ml-4"/>
    )
}