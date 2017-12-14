import React, { Component } from 'react';

import Options from './Options';
import * as BooksAPI from './BooksAPI';

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
    BooksAPI.search(query, maxResults).then(searchResult => {
      console.log("search result", searchResult)
      // this.setState({searchResult})
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
    })
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search"
          value={this.state.term}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
        {this.renderBookList(this.state.searchResult)}
      </div>
    );
  }

}

export default Search;
