// import React from "react";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import styles from "./NavBar.module.css";
// import { Container } from "react-bootstrap";
// const NavBar = () => {
//   return (
//     <Container fluid className={`${styles.mainNavBar} ${"bg-dark "}`}>
//       <Navbar expand="lg" data-bs-theme="dark" className={` ${"bg-dark"}`}>
//         <Navbar.Brand
//           href="/"
//           className={` ${"text-warning text-uppercase fw-bold mx-5"}`}
//         >
//           Zohaib
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav w-75">
//           <Nav className="me-auto"></Nav>
//           <Nav className="mx-5 ">
//             <Nav.Link href="/" className="me-1">
//               Home
//             </Nav.Link>
//             <Nav.Link href="/portfolio" className="me-1">
//               Portfolio
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </Container>
//   );
// };

// export default NavBar;
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className={`${styles.mainNavBar} ${"bg-body-tertiary"}`}
    >
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="me-5">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
