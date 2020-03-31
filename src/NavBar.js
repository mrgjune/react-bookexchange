import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "./NavBar.css";

class Navigation extends Component {

    render() {


        return (
            <Navbar expand="lg" bg="dark" variant="dark">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand href="#home">New York Six Book Exchange</Navbar.Brand>
                    </Nav>
                    <Nav>
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="books">Books</Nav.Link>
                        <Nav.Link href="link">My Account</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )


    }

}
export default Navigation;

