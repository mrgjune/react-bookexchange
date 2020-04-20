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
      categorySelected: false,
      searchType: "subject",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dropDown = this.dropDown.bind(this);
    this.dropDownSelector = this.dropDownSelector.bind(this);
    this.getBooks = this.getBooks.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.getBooks();
  }
  async getBooks(eventKey) {
    let searchTerm = this.state.searchTerm;
    if (eventKey) {
      searchTerm = eventKey;
    }
    let books = await BooklyApi.getBooks(searchTerm, this.state.searchCategory);
    console.log(books);
    this.setState({ books });
  }

  dropDown(eventKey) {
    this.setState({ searchCategory: eventKey });
    this.setState({ categorySelected: true });
  }
  dropDownSelector(eventKey) {
    this.setState({ searchType: eventKey });
    this.getBooks(eventKey);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let search;
    if (this.state.categorySelected) {
      if (this.state.searchCategory === "subject") {
        console.log("got here");
        search = (
          <div>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Row className="justify-content-lg-center">
                <Col xs={2.5}>
                  <h5>Select a subject:</h5>
                </Col>
                <Col xs={1}>
                  <DropdownButton
                    variant="secondary"
                    onSelect={this.dropDownSelector}
                    title={this.state.searchType}
                    value={this.state.searchType}
                    id="dropdown-basic-button"
                  >
                    <Dropdown.Item eventKey="Chem">Chemistry</Dropdown.Item>
                    <Dropdown.Item eventKey="business">Business</Dropdown.Item>
                    <Dropdown.Item eventKey="Computer Science">
                      {" "}
                      Computer Science{" "}
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
          </div>
        );
      } else if (this.state.searchCategory === "school") {
        search = (
          <div>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Row className="justify-content-lg-center">
                <Col xs={2.5}>
                  <h5>Select a subject:</h5>
                </Col>
                <Col xs={1}>
                  <DropdownButton
                    variant="secondary"
                    onSelect={this.dropDownSelector}
                    title={this.state.searchType}
                    value={this.state.searchType}
                    id="dropdown-basic-button"
                  >
                    <Dropdown.Item eventKey="Skidmore">Skidmore</Dropdown.Item>
                    <Dropdown.Item eventKey="St Lawarence">
                      St Lawarence
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Hamilton">Hamiltion</Dropdown.Item>
                    <Dropdown.Item eventKey="Union">Union</Dropdown.Item>
                    <Dropdown.Item eventKey="Hobart and William Smith">
                      Hobart and William Smith
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
          </div>
        );
      } else {
        search = (
          <Form.Group size="lg" controlId="formBasicEmail">
            <Row className="justify-content-lg-center">
              <InputGroup.Prepend>
                <input
                  size="lg"
                  name="searchTerm"
                  value={this.state.searchTerm}
                  title={this.state.searchTerm}
                  type="text"
                  onChange={this.handleChange}
                />
              </InputGroup.Prepend>

              <Button variant="outline-info" type="submit">
                Search
              </Button>
            </Row>
          </Form.Group>
        );
      }
    }
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
                    <Dropdown.Item eventKey="school">School</Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Form.Group>
            {search}
          </Form>
          <BookList books={this.state.books} />
        </Container>
      </div>
    );
  }
}

export default Books;
