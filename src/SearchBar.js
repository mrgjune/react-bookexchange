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
      categorySelected: false,
      searchType: "subject",
      school: "All Schools",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dropDownCateogry = this.dropDownCateogry.bind(this);
    this.dropDownSchool = this.dropDownSchool.bind(this);
    // this.dropDownSelector = this.dropDownSelector(this);
  }
  async handleSubmit(evt) {
    evt.preventDefault();
    let url = generatePath(
      "/search/:searchCategory/:searchTerm/:school",
      this.state
    );
    this.props.history.push(url);

    // let books = await BooklyApi.getBooks(
    //   this.state.searchTerm,
    //   this.state.searchCategory,
    //   this.state.school
    // );
    // this.setState({ books })
  }
  //   handleSubmit(evt) {
  //     evt.preventDefault();
  // this.getBooks();

  //   async getBooks(eventKey) {
  //     let searchTerm = this.state.searchTerm;
  //     if (eventKey) {
  //       searchTerm = eventKey;
  //     }
  //     let books = await BooklyApi.getBooks(searchTerm, this.state.searchCategory);
  //     console.log(books);
  //     this.setState({ books });
  //   }

  dropDownCateogry(eventKey) {
    this.setState({ searchCategory: eventKey });
    this.setState({ categorySelected: true });
  }
  dropDownSchool(eventKey) {
    this.setState({ school: eventKey });
  }
  //   dropDownSelector(eventKey) {
  //     this.setState({ searchType: eventKey });
  //     // this.getBooks(eventKey);
  //   }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    let search;
    // if (this.state.searchCategory === "Subject") {
    //   console.log("got here");
    //   search = (
    //     <div>
    //       <Form.Group controlId="exampleForm.SelectCustomSizeSm">
    //         <Row className="justify-content-lg-center">
    //           <Col xs={2.5}></Col>
    //           <Col xs={1}>
    //             <DropdownButton
    //               variant="secondary"
    //               onSelect={this.dropDownSelector}
    //               title={this.state.searchType}
    //               value={this.state.searchType}
    //               id="dropdown-basic-button"
    //             >
    //               <Dropdown.Item eventKey="Chem">Chemistry</Dropdown.Item>
    //               <Dropdown.Item eventKey="business">Business</Dropdown.Item>
    //               <Dropdown.Item eventKey="Computer Science">
    //                 {" "}
    //                 Computer Science{" "}
    //               </Dropdown.Item>
    //             </DropdownButton>
    //           </Col>
    //         </Row>
    //       </Form.Group>
    //     </div>
    //   );
    // } else {
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
