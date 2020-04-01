import React, { Component } from "react";
import { Form, Button, InputGroup, Dropdown, DropdownButton } from 'react-bootstrap';
//import Search from "./Search";
import BookList from "./BookList.js";
import BooklyApi from "./BooklyApi";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchCategory: "Select Category",
            searchTerm: "",
            books: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.dropDown = this.dropDown.bind(this);

    }


    async handleSubmit(evt) {
        evt.preventDefault();
        let books = await BooklyApi.getBooks(this.state.searchTerm, this.state.searchCategory);
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
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                        <Form.Label>Search for a book by:</Form.Label>

                        <DropdownButton value={this.state.searchCategory} onSelect={this.dropDown} id="dropdown-basic-button" title={this.state.searchCategory}>
                            <Dropdown.Item eventKey="title">Title</Dropdown.Item>
                            <Dropdown.Item eventKey="author">Author</Dropdown.Item>
                            <Dropdown.Item eventKey="subject">Subject</Dropdown.Item>
                        </DropdownButton>


                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <InputGroup.Prepend>
                            <input
                                name="searchTerm"
                                value={this.state.searchTerm}
                                type="text"
                                onChange={this.handleChange} />
                        </InputGroup.Prepend>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Search
            </Button>
                </Form>
                <BookList books={this.state.books} />
            </div>

        );
    }
}

export default Books;
