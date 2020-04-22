import React, { Component } from "react";
import BooklyApi from "./BooklyApi";
import BookList from "./BookList";
class DisplaySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: null,
    };
  }

  componentDidMount() {
    if (
      this.props.match.params.searchTerm !== this.state.searchTerm ||
      this.props.match.params.searchCategory !== this.state.searchCategory ||
      this.props.match.params.school !== this.state.school
    ) {
      this.setState(this.props.match.params);
      BooklyApi.getBooks(
        this.props.match.params.searchTerm,
        this.props.match.params.searchCategory,
        this.props.match.params.school
      ).then((books) => {
        this.setState({ books });
      });
    }
  }

  render() {
    return <BookList books={this.state.books} />;
  }
}
export default DisplaySearch;
