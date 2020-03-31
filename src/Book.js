import React, { Component } from "react";
//import Search from "./Search";
import BooklyApi from "./BooklyApi";
import Card from 'react-bootstrap/Card';
class Book extends Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {}
        };

        // this.handleSearch = this.handleSearch.bind(this);
    }

    // async handleSearch(search) {
    //     let users = await BooklyApi.getUses(search);
    //     this.setState({ users });
    // }

    async componentDidMount() {
        console.log(this.props.match.params.book)
        const isbn = this.props.match.params.book;

        let book = await BooklyApi.getBook(isbn);
        this.setState({ book });
    }

    render() {
        console.log(this.state.book)
        return (
            <Card border="primary" style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>{this.state.book.title}</Card.Title>
                    <Card.Text>
                        Author: {this.state.book.author}
                    </Card.Text>
                    <Card.Text>
                        Subject: {this.state.book.subject_type}
                    </Card.Text>

                </Card.Body>
            </Card>

        );
    }
}

export default Book;
