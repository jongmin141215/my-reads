import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Options from './Options';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class Search extends Component {
  state = {
    query: "",
    books: [],
    searchResult: []
  }
  componentDidMount() {
    BooksAPI.getAll().then(books => (
      this.setState({books})
    ))
  }
  renderBookList(books) {
    if (books !== undefined) {
      return (
        <ul className="books">
          {books.map(book => (
            <li key={book.id} className="book">
              <Book book={book} />
              <Options book={book} selected={book.shelf || "none"} updateBookShelf={() => (null)} />
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
    if (query !== "") {
      BooksAPI.search(query, maxResults).then(searchResult => {
        if (searchResult.error === undefined) {
          searchResult.map(result => {
            this.state.books.map(book => {
              if (result.id === book.id) {
                const index = searchResult.indexOf(result);
                searchResult.splice(index, 1, book)
              }
            })
          })
          this.setState({searchResult})
        } else {
          this.setState({searchResult: []})
        }
      })
    } else {
      this.setState({searchResult: []})
    }
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search"
          className="searchBar"
          value={this.state.term}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        {this.renderBookList(this.state.searchResult)}
        <Link to="/" className="back button">←</Link>
      </div>
    );
  }
}

export default Search;
