import React, { Component } from "react";


import BooklyApi from "./BooklyApi";
import BookCard from "./BookCard";
// import Search from "./Search";
// import "./CompanyList.scss";



class BookList extends Component {


    render() {
        console.log(this.props.books, "BOKS")
        if (!this.props.books) {
            return <div></div>
        }
        // const currUser = this.context;

        let books = this.props.books.map(book =>
            <div key={book.isbn} className="Book" to={`/books/${book.isbn}`}>
                <BookCard
                    book={book} />
            </div>
        );

        if (books.length === 0) {


            return (<p className="lead">Sorry, no results were found!</p>)

        }
        return (

            <div>
                {books}
            </div>
        );
    }

}

export default BookList;