import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = { books: [] };

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({ books: data });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => <HomeScreen books={this.state.books} />}
        />
        <Route path="/search" render={() => <SearchScreen />} />
      </div>
    );
  }
}

export default BooksApp;
