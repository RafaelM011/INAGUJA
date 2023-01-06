import React from "react";
import Filtro from "../components/Filtro";
import Lista from "../components/Lista";

export default function Bienes(){
    return(
        <div className="">
            <div className="flex flex-col p-4 md:flex-row place-content-around gap-4">
                <Filtro/>
                <Lista/>
            </div>
            <div className="bg-secondary mx-4">
                <div className="w-inherit text-white text-xl sm:text-2xl font-bold text-center py-2 bg-primary rounded-tl-full rounded-br-full md:border-x-2 md:border-white">            
                    Código UNSPSC - XXXXXXXX 
                </div>
            </div>
            <div className="bg-secondary mx-4 mt-2">
                <div className="w-inherit text-white text-lg sm:text-2xl font-bold text-center py-2 bg-primary rounded-tl-full rounded-br-full md:border-x-2 md:border-white">            
                    Cuenta presupuestaria - X.X.X.X.XX 
                </div>
            </div>
        </div>
    )
}