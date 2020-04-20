import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
class CheckOutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>First name </Form.Label>
          <Form.Control type="fname" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Last name </Form.Label>
          <Form.Control type="lname" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email: </Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>School</Form.Label>
          <Form.Control as="select">
            <option>Skidmore</option>
            <option>Hamilton</option>
            <option>St Lawarence</option>
            <option>Union</option>
            <option> Hobart and William Smith</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CheckOutForm;
