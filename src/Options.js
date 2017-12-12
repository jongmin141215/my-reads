import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';

class Options extends Component {
  handleChange(event) {
    BooksAPI.update(this.props.book, event.target.value).then(data => {
      console.log("data", data);
      this.props.updateBookShelf()
    })
  }
  render() {
    console.log("Options props", this.props)
    return (
      <div>
        <select defaultValue={this.props.selected} onChange={this.handleChange.bind(this)}>
          <option value disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default Options;
