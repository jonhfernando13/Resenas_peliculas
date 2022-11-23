import React from "react";
import {Route, Routes } from "react-router";
import { CrearUsuario } from "../components/crearUsuario";

export const RcrearUsuario =() => {
    return (
        <>
        <Routes>
            <Route path="/crearUsuario" element={<CrearUsuario></CrearUsuario>}></Route>

        </Routes>
        </>
    )
}