import React, { Component } from "react";


import BooklyApi from "./BooklyApi";
import BookCard from "./BookCard";
// import Search from "./Search";
// import "./CompanyList.scss";



class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        };
        this.filterBooks = this.filterBooks.bind(this);
    }



    async componentDidMount() {
        const books = await BooklyApi.getBooks();
        this.setState({ books });
    }
    /** sets the state for the filtered list of companies based on search terms */
    filterBooks(books) {
        this.setState({ books });
    }

    render() {
        // const currUser = this.context;

        let books = this.state.books.map(book =>
            <div key={book.isbn} className="Book" to={`/books/${book.isbn}`}>
                <BookCard
                    book={book} />
            </div>
        );

        // if (Object.keys(currUser).length !== 0) {
        //     if (this.state.isLoading) {
        //         return <p>Loading......</p>
        //     }
        return (
            <div>
                {/* <Search search="company" filterCo={this.filterBooks} /> */}
                {books}
            </div>
        );
    }

}

export default BookList;