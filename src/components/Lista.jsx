import React from "react";
import search from "../assets/search.png";

export default function Lista() {
    return(
        <div className="h-[550px] w-full md:w-1/2 bg-primary">
            <h1 className="text-white font-semibold text-xl px-6 py-4"> Descripción, sinonimo o código</h1>
            <input className="ml-6 w-4/5 h-[28px] outline-secondary rounded-xl px-4" type="text"/> 
            <img src={search} alt="search" className="inline w-[28px] ml-4 cursor-pointer hover:scale-125"/>
            {/* THE DIV BELOW MUST BE ON THE LIST COMPONENT */}
            <div className="w-4/5 h-[400px] ml-6 mt-4 overflow-auto border-2 border-white rounded-xl">
                {/* RENDER THE ITEMS FROM EXCEL AND SEARCH FIELD */}
            </div>
        </div>
    )
}