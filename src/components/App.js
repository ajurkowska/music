import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import Search from './Search';
import Songs from './Songs';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Menu />
        <Search />
        <Songs />
      </React.Fragment>
    );
  }
}

export default App;
