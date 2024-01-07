import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";

import { Container } from "react-bootstrap";
const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home"); // Default active link

  const handleSetActive = (link) => {
    setActiveLink(link);
  };
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
            <Nav.Link
              href="/"
              className={`${
                activeLink === "home" ? styles.active : ""
              } ${"px-3"}`}
              onClick={() => handleSetActive("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="/portfolio"
              className={`${
                activeLink === "portfolio" ? styles.active : ""
              } ${"px-3"}`}
              onClick={() => handleSetActive("portfolio")}
            >
              Portfolio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
