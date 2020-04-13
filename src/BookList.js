import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BooklyApi from "./BooklyApi";
import BookCard from "./BookCard";
// import Search from "./Search";
// import "./CompanyList.scss";

class BookList extends Component {
  render() {
    if (!this.props.books) {
      console.log("hello");
      return <div></div>;
    }
    // const currUser = this.context;

    let books = this.props.books.map((book) => (
      <div key={book.isbn} className="Book" to={`/books/${book.isbn}`}>
        <BookCard book={book} />
      </div>
    ));

    if (books.length === 0) {
      return (
        <Container>
          <Row className="justify-content-lg-center">
            <p className="lead">Sorry, no results were found!</p>
          </Row>
        </Container>
      );
    }
    return <div>{books}</div>;
  }
}

export default BookList;
