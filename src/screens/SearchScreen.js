import React, { Component } from 'react';
import BookShelf from '../components/BookShelf';
import debounce from '../utils/debounce';
import { search } from '../BooksAPI';

import { Link } from 'react-router-dom';

class SearchScreen extends Component {
  state = { query: '', searchBooks: [] };

  mapBooksToShelf = books => {
    return books.map(b => {
      let foundBook = this.props.books.find(
        existingBook => existingBook.id === b.id
      );
      if (foundBook) {
        b.shelf = foundBook.shelf;
      } else {
        b.shelf = 'none';
      }
      return b;
    });
  };

  handleSearch = () => {
    search(this.state.query).then(data => {
      if (Array.isArray(data)) {
        this.setState({ searchBooks: this.mapBooksToShelf(data) });
      } else {
        this.setState({ searchBooks: [] });
      }
    });
  };

  debouncedSearch = debounce(this.handleSearch, this);

  handleChange = ({ target }) => {
    this.setState({ query: target.value }, this.debouncedSearch);
  };

  changeShelfForSearch = (bookId, shelf) => {
    this.setState(curState => ({
      searchBooks: curState.searchBooks.map(book => {
        if (book.id === bookId) {
          return { ...book, shelf };
        } else {
          return book;
        }
      }),
    }));
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="close-search-container">
            <Link className="close-search" to="/">
              Close
            </Link>
          </div>

          <div className="search-books-input-wrapper">
            {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
            <input
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            text="Search Results"
            books={this.state.searchBooks}
            changeShelf={this.props.changeShelf}
            changeShelfForSearch={this.changeShelfForSearch}
          />
        </div>
      </div>
    );
  }
}

export default SearchScreen;
