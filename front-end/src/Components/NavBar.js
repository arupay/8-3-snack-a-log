import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      className="nav-color"
      variant="light"
      sticky="top"
      expand="md"
      collapseOnSelect
    >
      <Container>
        <Navbar.Toggle />
        <Navbar.Brand mb-0="true" h1="true" href="/snacks">
          Snacks
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="/snacks/new">New Snack</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
