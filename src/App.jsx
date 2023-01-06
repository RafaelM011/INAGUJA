import React from "react"
import { Route, Routes } from "react-router"
import { Header } from "./components/Header"
import Bienes from "./pages/catalogo_bienes"

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/catalogo_bienes' element={<Bienes/>}/>
      </Routes>
    </>
  )
}