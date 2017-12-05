import React, { Component } from 'react';

import BookShelf from './BookShelf';

class App extends Component {
  render() {
    return (
      <div>
        <BookShelf category="Currently Reading"/>
        <BookShelf category="Want to Read"/>
        <BookShelf category="Read"/>
      </div>
    );
  }
}

export default App;
