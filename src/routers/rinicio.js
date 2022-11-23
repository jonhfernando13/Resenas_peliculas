import React from "react";
import {Route, Routes } from "react-router"
import { Inicio } from "../components/inicio";

export const Rinicio =() => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
        </Routes>
        </>
    )
}