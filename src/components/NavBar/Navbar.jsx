import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      data-bs-theme="dark"
      className={`bg-dark ${styles.mainNavBar}`}
    >
      <Container fluid className="px-5">
        <NavLink
          to="/"
          className="text-warning text-uppercase fw-bold px-3 text-decoration-none"
        >
          Zohaib
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? `${styles.active} p-2 bg-warning` : "p-2"
                } px-3 text-decoration-none text-white`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `${
                  isActive ? `${styles.active} p-2 bg-warning` : "p-2"
                } px-3 text-decoration-none text-white`
              }
            >
              Portfolio
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
