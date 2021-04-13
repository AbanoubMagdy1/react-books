import React from 'react';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import { Route } from 'react-router-dom';
import { getAll, update } from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = { books: [] };

  async componentDidMount() {
    const books = await getAll();
    this.setState({ books });
  }

  changeShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      this.setState(curState => ({
        books:
          book.shelf === 'none'
            ? [...curState.books, { ...book, shelf }]
            : curState.books.map(b => {
                if (b.id === book.id) {
                  return { ...b, shelf };
                } else {
                  return b;
                }
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
        <Route
          path="/search"
          render={() => (
            <SearchScreen
              changeShelf={this.changeShelf}
              books={this.state.books}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
