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
      className={` ${"bg-dark"} ${styles.mainNavBar}`}
    >
      <Container fluid>
        <Navbar.Brand
          href="/"
          className={` ${"text-warning text-uppercase fw-bold px-3"}`}
        >
          Zohaib
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto"></Nav>
          <Nav className="me-4 ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
