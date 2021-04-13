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

  changeShelf = (book, shelf) => {
    console.log(book);
    BooksAPI.update(book, shelf).then(() => {
      this.setState(curState => ({
        books: curState.books.map(b => {
          if (b.id === book.id) {
            b.shelf = shelf;
          }
          return b;
        }),
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <HomeScreen
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        />
        <Route path="/search" render={() => <SearchScreen />} />
      </div>
    );
  }
}

export default BooksApp;
