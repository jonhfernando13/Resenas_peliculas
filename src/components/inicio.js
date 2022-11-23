import React from "react";
import { Header } from "../components/header";
import { Contenido } from "../components/contenido";

export const Inicio = () => {
  return (
    <div>
      <Header />
      <table align="center" cellspacing="15" cellpadding="15" className="container">
        <tr>
          <td >
            <Contenido />
          </td>
          <td>
            <tr>
              <td>
                hola
              </td>
            </tr>
            <tr>
              <td>
                hola
              </td>
            </tr>
            <tr>
              <td>
                hola
              </td>
            </tr>
          </td>
        </tr>
      </table>
    </div>
  );
};
