import React, { Component } from 'react';

class BookShelf extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.category}</h2>
      </div>
    );
  }
}

export default BookShelf;
