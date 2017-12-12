import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class BookShelves extends Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }
  updateBookShelves() {
    BooksAPI.getAll().then(books => (
      this.setState({
        currentlyReading: books.filter(book => book.shelf === "currentlyReading"),
        wantToRead: books.filter(book => book.shelf === "wantToRead"),
        read: books.filter(book => book.shelf === "read")
      })
    ))
  }
  componentDidMount() {
    this.updateBookShelves();
  }
  updateBookShelf() {
    this.updateBookShelves();
  }
  render() {
    return (
      <div>
      Bookshelves!
        <BookShelf category="Currently Reading" books={this.state.currentlyReading} updateBookShelf={() => this.updateBookShelf()} />
        <BookShelf category="Want to Read"  books={this.state.wantToRead} updateBookShelf={() => this.updateBookShelf()}/>
        <BookShelf category="Read"  books={this.state.read} updateBookShelf={() => this.updateBookShelf()}/>
      </div>
    )
  }
}

export default BookShelves;
