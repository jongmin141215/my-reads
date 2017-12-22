import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as BooksAPI from './BooksAPI';

class Options extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    selected: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired
  }
  handleChange(event) {
    BooksAPI.update(this.props.book, event.target.value).then(data => {
      this.props.updateBookShelf()
    })
  }
  render() {
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
