import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

class BookCard extends Component {
  render() {
    const { isbn, author, title } = this.props.book;
    let a;
    if (this.props.book.available) {
      a = <div> Avaialbe </div>;
    }
    return (
      <Link className="Card card" to={`/books/${isbn}`}>
        <div className="card-body">
          <h6 className="card-title d-flex justify-content-between">
            <span className="text-capitalize">{title}</span>
          </h6>
          <h6>
            <span className="text-capitalize">{author}</span>
          </h6>
          <span className="text-capitalize">{a}</span>
        </div>
      </Link>
    );
  }
}

export default BookCard;
