import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';

class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route path="/" exact render={() => <HomeScreen />} />
        <Route path="/search" render={() => <SearchScreen />} />
      </div>
    );
  }
}

export default BooksApp;
