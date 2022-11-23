import React, { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import Data from "../context/dataContext";
import Button from "react-bootstrap/Button";
import dataContext from "../context/dataContext";

export const GestionUsuario = () => {
  const { user, setUsers, borrar } = useContext(dataContext);

  const del = (e) => {
    borrar(e.target.id);
  };

  useEffect(() => {
    setUsers();
  }, []);

  return user !== undefined ? (
    <div>
      <Table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo Electrónico</th>
            <th>Accción</th>
          </tr>
        </thead>
        <tbody>
          {user.map((element) => {
            return (
              <tr>
                <td>{element.nombre}</td>
                <td>{element.correo}</td>
                <td>
                  <button onClick={del}id={element._id}>Borrar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  ) : (
    <>No hay usuario</>
  );
};
