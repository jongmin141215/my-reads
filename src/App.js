import React, { Component } from 'react';

import * as BooksAPI from './BooksAPI';
import BookShelf from './BookShelf';

class App extends Component {
  componentDidMount() {
    const books = BooksAPI.getAll().then(books =>(
      this.setState({ books })
    ));
  }
  state = {
    books: []
  }
  render() {
    console.log("current", this.state.books.filter(book => book.shelf === "currentlyReading"))
    return (
      <div>
        <BookShelf category="Currently Reading" books={this.state.books.filter(book => book.shelf === "currentlyReading")} />
        <BookShelf category="Want to Read"  books={this.state.books.filter(book => book.shelf === "wantToRead")}/>
        <BookShelf category="Read"  books={this.state.books.filter(book => book.shelf === "read")}/>
      </div>
    );
  }
}

export default App;
