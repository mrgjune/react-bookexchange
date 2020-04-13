import React, { Component } from "react";
//import Search from "./Search";
import BooklyApi from "./BooklyApi";
import { Card, Button } from "react-bootstrap";
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
    };

    // this.handleSearch = this.handleSearch.bind(this);
  }

  // async handleSearch(search) {
  //     let users = await BooklyApi.getUses(search);
  //     this.setState({ users });
  // }

  async componentDidMount() {
    const isbn = this.props.match.params.book;

    let book = await BooklyApi.getBook(isbn);
    this.setState({ book });
  }

  render() {
    let available;
    let button;
    if (this.state.book.available) {
      available = <div>Available</div>;
    } else {
      available = <div>Checked out</div>;
    }

    return (
      <div>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{this.state.book.title}</Card.Title>
            <Card.Text>Author: {this.state.book.author}</Card.Text>
            <Card.Text>Subject: {this.state.book.subject_type}</Card.Text>
            <Card.Text>Isbn: {this.state.book.isbn}</Card.Text>
            <Card.Text>{available}</Card.Text>
            <Card.Text>School: {this.state.book.school_handle}</Card.Text>
            <Button>Request Book</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Book;
