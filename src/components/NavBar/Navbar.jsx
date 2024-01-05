import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./NavBar.module.css";
function NavBar() {
  return (
    <Navbar
      expand="lg"
      className={`${styles.mainNavBar} ${"bg-body-tertiary"}`}
    >
      <Container>
        <Navbar.Brand href="/" className="text-warning text-uppercase fw-bold">
          Zohaib
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-5">
            <Nav.Link href="/"> Home </Nav.Link>
            <Nav.Link href="/portfolio"> Portfolio </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
