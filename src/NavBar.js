import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./NavBar.css";

class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">New York Six Book Exchange</Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link href="books">Books</Nav.Link>
            <Nav.Link href="/">About the Project</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
