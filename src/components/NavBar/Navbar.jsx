import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import { Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className={`${styles.mainNavBar} ${"bg-dark "}`}
    >
      <Container>
        <Navbar.Brand
          href="/"
          className={` ${"text-warning text-uppercase fw-bold mx-5"}`}
        >
          Zohaib
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav w-75">
          <Nav className="me-auto"></Nav>
          <Nav className="mx-5 ">
            <Nav.Link href="/" className="me-1">
              Home
            </Nav.Link>
            <Nav.Link href="/portfolio" className="me-1">
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
