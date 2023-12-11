import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <Navbar
      // expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className={`${styles.mainNavBar}`}
    >
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
        <Nav className="me-5">
          <Nav.Link href="/" className="mx-1">
            Home
          </Nav.Link>
          <Nav.Link href="/portfolio" className="mx-3">
            Portfolio
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
