import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "./SearchBar";

class Navigation extends Component {
  render() {
    return (
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand
              expan="lg"
              style={{ color: "black", fontWeight: "bold" }}
              href="/"
            >
              New York Six
            </Navbar.Brand>
            <Navbar.Brand
              style={{ color: "green", fontWeight: "bold" }}
              href="/"
            >
              Book Exchange
            </Navbar.Brand>
          </Nav>
          <Nav>
            <SearchBar />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigation;
