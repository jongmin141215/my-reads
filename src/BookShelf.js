import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Options from './Options';
import Book from './Book';

class BookShelf extends Component {
  static propTypes = {
    category: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }
  renderBookList(books) {
    if (books.length === 0) {
      return <h5 className="no-books">There are no books in this shelf.</h5>
    }
    return (
      <ul className="books">
        {books.map(book => (
          <li key={book.id} className="book">
            <Book book={book} />
            <Options className={book.id} book={book} selected={book.shelf} updateBookShelf={() => this.props.updateBookShelf()} />
          </li>
        ))}
      </ul>
    )
  }
  render() {
    return (
      <div>
        <h2 className="category">{this.props.category}</h2>
        {this.renderBookList(this.props.books)}
      </div>
    );
  }
}

export default BookShelf;
