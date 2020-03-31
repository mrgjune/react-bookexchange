import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

class BookCard extends Component {
    render() {

        const { isbn, author, title } = this.props.book;
        return (

            <Link className="Card card" to={`/books/${isbn}`}>
                <div className="card-body">

                    <h6 className="card-title d-flex justify-content-between">
                        <span className="text-capitalize">{title}</span>
                    </h6>
                    <p>{author}</p>

                </div>
            </Link>





        );
    }

}

export default BookCard;