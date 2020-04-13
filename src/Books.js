import React, { Component } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import BookList from "./BookList.js";
import BooklyApi from "./BooklyApi";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCategory: "Select Category",
      searchTerm: "",
      books: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dropDown = this.dropDown.bind(this);
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.searchCategory === "Select Category") {
      return this.toggleSelectCat();
    }
    let books = await BooklyApi.getBooks(
      this.state.searchTerm,
      this.state.searchCategory
    );
    this.setState({ books });
  }

  dropDown(eventKey) {
    this.setState({ searchCategory: eventKey });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Row className="justify-content-lg-center">
                <Col xs={2.5}>
                  <h5>Search for a book by:</h5>
                </Col>
                <Col xs={1}>
                  <DropdownButton
                    variant="secondary"
                    value={this.state.searchCategory}
                    onSelect={this.dropDown}
                    id="dropdown-basic-button"
                    title={this.state.searchCategory}
                  >
                    <Dropdown.Item eventKey="title">Title</Dropdown.Item>
                    <Dropdown.Item eventKey="author">Author</Dropdown.Item>
                    <Dropdown.Item eventKey="subject">Subject</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group size="lg" controlId="formBasicEmail">
              <Row className="justify-content-lg-center">
                <InputGroup.Prepend>
                  <input
                    size="lg"
                    name="searchTerm"
                    value={this.state.searchTerm}
                    type="text"
                    onChange={this.handleChange}
                  />
                </InputGroup.Prepend>
                <Button variant="outline-info" type="submit">
                  {" "}
                  Search
                </Button>
              </Row>
            </Form.Group>
          </Form>
          <BookList books={this.state.books} />
        </Container>
      </div>
    );
  }
}

export default Books;
