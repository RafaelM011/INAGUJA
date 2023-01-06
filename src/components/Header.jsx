import React from "react";
import Logo from "../assets/Logo.png"
import Escudo from "../assets/escudo.svg"

export const Header = () => {
    return(
        <div className="">
            <div className="flex place-content-between px-2 md:px-10 pt-4"> 
                <img src={Logo} className="w-4/12 lg:w-3/12"/>
                <img src={Escudo} className="w-4/12 lg:w-3/12"/>
            </div>
            <div className="">

            </div>
        </div>
    )
}