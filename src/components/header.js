import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
      <div className="home">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="">Home</Navbar.Brand>
            <input type="search" className="me-2" placeholder="Search..."/>
            <Nav className="me-auto"></Nav>
          </Container>
        </Navbar>
      </div>
    </>
  );
};
