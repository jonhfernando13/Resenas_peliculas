import React from 'react'
import {Route, Routes } from "react-router"
import { GestionUsuario } from "../components/gestionUsuario";


export const Rgestion = () => {
  return (
    <>
    <Routes>
        <Route path="/gestionUsuarios" element={<GestionUsuario></GestionUsuario>}></Route>
    </Routes>
    </>
  )
}
