import React, { Component } from "react";

import BooklyApi from "./BooklyApi";
import { Card, Button } from "react-bootstrap";
import CheckOutForm from "./checkOutForm";
class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {},
      displayForm: false,
    };

    this.displayForm = this.displayForm.bind(this);
  }

  async componentDidMount() {
    const isbn = this.props.match.params.book;

    let book = await BooklyApi.getBook(isbn);
    this.setState({ book });
  }
  displayForm() {
    this.setState({ displayForm: true });
  }

  render() {
    let displayForm;
    if (this.state.displayForm) {
      console.log("hello");
      displayForm = <CheckOutForm />;
    }

    console.log(this.state.book);
    let available;
    let image = `images/${this.state.book.book_image}`;
    if (this.state.book.available) {
      available = <div>Available</div>;
    } else {
      available = <div>Checked out</div>;
    }

    return (
      <div>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Img src={image}></Card.Img>
            <Card.Title>{this.state.book.title}</Card.Title>
            <Card.Text>Author: {this.state.book.author}</Card.Text>
            <Card.Text>Subject: {this.state.book.subject_type}</Card.Text>
            <Card.Text>Isbn: {this.state.book.isbn}</Card.Text>
            <Card.Text>{available}</Card.Text>
            <Card.Text>School: {this.state.book.school_handle}</Card.Text>
            <Button onClick={this.displayForm}>Request Book</Button>
          </Card.Body>
        </Card>
        {displayForm}
      </div>
    );
  }
}

export default Book;
