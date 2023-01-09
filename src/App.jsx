import React, { useEffect } from "react"
import { Route, Routes, useNavigate } from "react-router"
import { useDispatch } from "react-redux"
import { Header } from "./components/Header"
import Bienes from "./pages/catalogo_bienes"
import { fetchData } from "./slices/listSlice"
import GenerarOrden from "./pages/generar_orden"

export default function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    navigate('/catalogo_bienes');
  },[])

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/catalogo_bienes' element={<Bienes/>}/>
        <Route path='/generar_orden' element={<GenerarOrden/>}/>
      </Routes>
    </>
  )
}