import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "react-bootstrap";
import "./Card.scss";
//import Img from "react-image";

class BookCard extends Component {
  render() {
    const {
      isbn,
      author,
      title,
      available,
      publisher,
      description,
    } = this.props.book;
    let a;
    let image = `images/${this.props.book.book_image}`;
    if (available) {
      a = <div> Avaialbe </div>;
    }
    return (
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Author: {author}
          </Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">
            Publishers: {publisher}
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Link href={`/books/${isbn}`}> More Details</Card.Link>
      </Card>

      // <Link className="Card card" to={`/books/${isbn}`}>
      //   <div className="card-body">
      //     <h6 className="card-title d-flex justify-content-between">
      //       <span className="text-capitalize">{title}</span>
      //     </h6>
      //     <img src={image} alt="textbookimage" />
      //     <h6>
      //       <span className="text-capitalize">Authors: {author}</span>
      //     </h6>
      //     <h6>
      //       <span className="text-capitalize">Publishers: {publisher}</span>
      //     </h6>
      //     <h6>
      //       <span className="text-capitalize"> {description}</span>
      //     </h6>
      //     <span className="text-capitalize">{a}</span>
      //   </div>
      // </Link>
    );
  }
}

export default BookCard;
