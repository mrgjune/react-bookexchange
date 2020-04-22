import React, { Component } from "react";
import { Card, Container, Row } from "react-bootstrap";

// import { Link } from "react-router-dom";
// import "./Home.css";

class Home extends Component {
  //   static contextType = UserContext;

  render() {
    // const currentUser = this.context;
    return (
      <Container>
        <Row className="justify-content-md-center">
          <h2>Welcome To the New York Six Book Exchange </h2>
        </Row>
        <Row className="justify-content-md-center">
          <h5 className="text-secondary">
            This site's mission is to help students try to reduce the cost of
            textboks by working with the{" "}
            <Card.Link href="https://www.newyork6.org/">
              New York Six Colleges
            </Card.Link>
          </h5>
        </Row>
        <Row className="justify-content-md-center"></Row>
        <Row className="justify-content-md-center">
          <h4>About this Project:</h4>
        </Row>
      </Container>
    );
  }
}

export default Home;
