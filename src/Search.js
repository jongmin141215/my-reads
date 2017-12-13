import React, { Component } from 'react';

import Options from './Options';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  state = {
    query: "",
    books: []
  }
  renderBookList(books) {
    console.log(books)
    if (books !== undefined) {
      console.log("hi");
      return (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              {book.title}
              <Options book={book} selected={book.shelf || "none"} updateBookShelf={() => alert("do something")} />
            </li>
          ))}
        </ul>
      )
    }
  }
  updateQuery(query) {
    this.setState({query})
    this.search(query, 10)
  }
  search(query, maxResults) {
    BooksAPI.search(query, maxResults).then(books => {
      this.setState({books});
      // console.log(books[0]);
    })
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search"
          value={this.state.term}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        {this.renderBookList(this.state.books)}
      </div>
    );
  }
}

export default Search;
