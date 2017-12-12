import React, { Component } from 'react';

import Options from './Options';

class BookShelf extends Component {
  renderBookList(books) {
    if (books.length === 0) {
      return <h5>There are no books in this shelf.</h5>
    }
    return (
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title}
            <Options book={book} selected={book.shelf} updateBookShelf={() => this.props.updateBookShelf()} />
          </li>
        ))}
      </ul>
    )
  }
  render() {
    return (
      <div>
        <h2>{this.props.category}</h2>
        {this.renderBookList(this.props.books)}
      </div>
    );
  }
}

export default BookShelf;
