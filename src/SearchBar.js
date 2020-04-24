import React, { Component } from "react";
import { generatePath, withRouter } from "react-router";
import {
  Form,
  Container,
  Row,
  Col,
  Button,
  FormControl,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import BookList from "./BookList.js";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchCategory: "Title",
      searchTerm: "",
      books: null,
      searchType: "Select Subject",
      school: "All Schools",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dropDownCateogry = this.dropDownCateogry.bind(this);
    this.dropDownSchool = this.dropDownSchool.bind(this);
    this.dropDownSubject = this.dropDownSubject.bind(this);
    this.sendParams = this.sendParams.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.sendParams();
  }

  sendParams(subject) {
    console.log(subject, "here");
    let url;

    if (!this.state.searchTerm) {
      url = generatePath("/search/:searchCategory/:school", this.state);
    } else {
      url = generatePath(
        "/search/:searchCategory/:school/:searchTerm",
        this.state
      );
    }
    this.props.history.push(url);
  }
  dropDownCateogry(eventKey) {
    this.setState({ searchCategory: eventKey });
  }
  dropDownSchool(eventKey) {
    this.setState({ school: eventKey });
  }
  dropDownSubject(eventKey) {
    this.setState({ searchType: eventKey });
    this.sendParams(eventKey);
  }

  handleChange(e) {
    console.log(e);
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let search;
    if (this.state.searchCategory === "Subject") {
      console.log("got here");
      search = (
        <Form.Group
          inline
          onSubmit={this.handleSubmit}
          controlId="exampleForm.SelectCustomSizeSm"
        >
          <DropdownButton
            variant="outline-secondary"
            className="pt-3"
            onSelect={this.dropDownSubject}
            title={this.state.searchType}
            value={this.state.searchType}
            id="dropdown-basic-button"
          >
            <Dropdown.Item eventKey="Chemistry">Chemistry</Dropdown.Item>
            <Dropdown.Item eventKey="Business">Business</Dropdown.Item>
            <Dropdown.Item eventKey="Computer Science">
              Computer Science
            </Dropdown.Item>
          </DropdownButton>
        </Form.Group>
      );
    } else {
      search = (
        <Form inline onSubmit={this.handleSubmit}>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            name="searchTerm"
            value={this.state.searchTerm}
            title={this.state.searchTerm}
            onChange={this.handleChange}
          />
          <Button type="submit" variant="outline-success">
            Search
          </Button>
        </Form>
      );
    }

    return (
      <Container fluid>
        <Row className="justify-content-lg-right">
          <Form inline>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Col xs={2.5}>Search by:</Col>
              <Col xs={1}>
                <DropdownButton
                  variant="outline-secondary"
                  value={this.state.searchCategory}
                  onSelect={this.dropDownSchool}
                  id="dropdown-basic-button"
                  title={this.state.school}
                >
                  <Dropdown.Item eventKey="All Schools">
                    All Schools
                  </Dropdown.Item>
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
            </Form.Group>
          </Form>
          <Form inline>
            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
              <Col xs={2.5}>Keyword:</Col>
              <Col xs={1}>
                <DropdownButton
                  variant="outline-secondary"
                  value={this.state.searchCategory}
                  onSelect={this.dropDownCateogry}
                  id="dropdown-basic-button"
                  title={this.state.searchCategory}
                >
                  <Dropdown.Item eventKey="Title">Title</Dropdown.Item>
                  <Dropdown.Item eventKey="Author">Author</Dropdown.Item>
                  <Dropdown.Item eventKey="Subject">Subject</Dropdown.Item>
                </DropdownButton>
              </Col>
            </Form.Group>
          </Form>

          <Col>{search}</Col>
        </Row>

        <BookList books={this.state.books} />
      </Container>
    );
  }
}

export default withRouter(SearchBar);
