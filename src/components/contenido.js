import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

export const Contenido = () => {
  return (
    <>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel"
              src="./pelicula_dog.png"
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel"
              src="./pelicula_nueve.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 carrusel"
              src="./pelicula_upgrade.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Button href="/crearUsuario">CrearUsuario</Button>
      </div>
    </>
  );
};
