import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class BookShelf extends Component {
  renderBookList(books) {
    if (!books) {
      return <h3>Currently no books in this shelf</h3>
    }
    return (
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    )
  }
  render() {
    console.log("books", this.props)
    return (
      <div>
        <h2>{this.props.category}</h2>
        {this.renderBookList(this.props.books)}
      </div>
    );
  }
}

export default BookShelf;
