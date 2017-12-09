import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class BookShelves extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => (
      this.setState({books: books})
    ))
  }

  render() {
    return (
      <div>
      Bookshelves!
        <BookShelf category="Currently Reading" books={this.state.books.filter(book => book.shelf === "currentlyReading")} />
        <BookShelf category="Want to Read"  books={this.state.books.filter(book => book.shelf === "wantToRead")}/>
        <BookShelf category="Read"  books={this.state.books.filter(book => book.shelf === "read")}/>
      </div>
    )
  }
}

export default BookShelves;
