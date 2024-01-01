import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import { Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className={`${styles.mainNavBar} `}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          className={`${
            styles.brandFontFamily
          } ${"text-warning text-uppercase mx-5"}`}
        >
          Zohaib
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-1">
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
