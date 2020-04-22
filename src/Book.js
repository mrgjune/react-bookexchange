import React, { Component } from "react";
import "./image.css";
import BooklyApi from "./BooklyApi";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
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
    console.log(this.state.book.book_image, "Sfs");
    let displayForm;
    if (this.state.displayForm) {
      displayForm = <CheckOutForm />;
    }

    let available;

    let image = `/images/${this.state.book.book_image}`;
    if (this.state.book.available) {
      available = <div>Available</div>;
    } else {
      available = <div>Checked out</div>;
    }

    return (
      <Container>
        <Row>
          <Col xs={2}>
            <Card.Img className="pt-3" src={image} />
          </Col>
          <Col xs={9}>
            <Card.Body>
              <Card.Title>{this.state.book.title}</Card.Title>
              <Card.Text>Author: {this.state.book.author}</Card.Text>
              {/* <Card.Text>Copyright Year: {this.state.books.copyright_year}</Card.Text> */}
              <Card.Text>Subject: {this.state.book.subject_type}</Card.Text>
              <Card.Text>Isbn: {this.state.book.isbn}</Card.Text>
              <Card.Text>{available}</Card.Text>
              <Card.Text>School: {this.state.book.school_handle}</Card.Text>
              <Button onClick={this.displayForm}>Request Book</Button>
            </Card.Body>
          </Col>
          <Col></Col>
        </Row>
        {displayForm}
      </Container>

      // <Card.Body>

      // // </Card.Body>
      // {/* </Card> */}
    );
  }
}

export default Book;
