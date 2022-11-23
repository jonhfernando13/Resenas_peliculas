import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Data from "../context/dataContext";

export const CrearUsuario = () => {
  const { user, addUsers } = useContext(Data);
  const crear = () => {
    const nombre = document.getElementById("nombre").value;
    const contrasena = document.getElementById("contrasena").value;
    const correo = document.getElementById("correo").value;
    const formData = new FormData()
    formData.set('nombre', `${nombre}`)
    formData.set('correo', `${correo}`)
    formData.set('contrasena', `${contrasena}`)

    addUsers(formData);
  };
  return (
    <div className="formulario">
      <Form className="formulario_i">
        <Form.Group className="mb-3 formulario_l">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Por favor escriba su nombre"
            name="nombre"
            id="nombre"
          />
        </Form.Group>

        <Form.Group className="mb-3 formulario_l">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Por favor escriba una contraseña"
            name="contrasena"
            id="contrasena"
          />
        </Form.Group>

        <Form.Group className="mb-3 formulario_l">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="correo" id="correo" name="correo"/>
        </Form.Group>

        <Button variant="primary" onClick={crear}>
          Crear
        </Button>
      </Form>
    </div>
  );
};
