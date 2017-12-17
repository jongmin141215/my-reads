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
    console.log(books)
    if (books !== undefined) {
      console.log("hi");
      return (
        <ul className="books">
          {books.map(book => (
            <li key={book.id} className="book">
              <Book book={book} />
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
    if (query !== "") {
      BooksAPI.search(query, maxResults).then(searchResult => {
        console.log("search result", searchResult)
        console.log("searchResult.error", searchResult.error)
        if (searchResult.error === undefined) {
          searchResult.map(result => {
            this.state.books.map(book => {
              if (result.id === book.id) {
                const index = searchResult.indexOf(result);
                searchResult.splice(index, 1, book)
              }
            })
          })
          console.log("RESULT!!!!!!!!", searchResult)
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
        <Link to="/" className="back">←</Link>
      </div>
    );
  }

}

export default Search;
