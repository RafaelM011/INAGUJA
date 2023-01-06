import React from "react";
import Logo from "../assets/Logo.png"
import Escudo from "../assets/escudo.svg"
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <div className="">
            <div className="flex place-content-between px-2 md:px-10 pt-4 mb-4"> 
                <img src={Logo} className="min-w-[140px] w-4/12 lg:w-3/12"/>
                <img src={Escudo} className="min-w-[140px] w-4/12 lg:w-3/12"/>
            </div>
            <div className="bg-secondary w-screen">
                <div className="w-inherit flex flex-col md:flex-row place-content-around py-1 bg-primary rounded-tl-full rounded-br-full md:border-x-2 md:border-white">
                    <Link to='/catalogo_bienes'>
                        <button className="py-1 text-white border-b-2 md:border-b-0 border-white text-sm md:text-md lg:text-lg"> CATALOGO DE BIENES Y SERVICIOS </button>
                    </Link>
                    <Link to='/catalogo_presupuestario'>
                        <button className="py-1 text-white text-sm md:text-md lg:text-lg"> CATALOGO DE PRESUPUESTO </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}