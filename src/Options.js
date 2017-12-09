import React, { Component } from 'react';

class Options extends Component {

  render() {
    console.log(this.props.selected)
    return (
      <div>
        <select defaultValue={this.props.selected}>
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
