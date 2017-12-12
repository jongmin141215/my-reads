import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BookShelves from './BookShelves';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={BookShelves} />
        <Route path="/search" component={Search} />
      </div>
    );
  }
}

export default App;
