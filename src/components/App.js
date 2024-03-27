import React, { Component } from 'react';
import Header from './Header';
import Songs from './Songs';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Songs />
      </React.Fragment>
    );
  }
}

export default App;
