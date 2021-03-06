import React, { Component } from 'react';
import BookShelf from '../components/BookShelf';
import { Link } from 'react-router-dom';

export const shelves = [
  { shelf: 'currentlyReading', text: 'Currently Reading' },
  { shelf: 'wantToRead', text: 'Want To Read' },
  { shelf: 'read', text: 'Read' },
];

class HomeScreen extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map(shelf => (
              <BookShelf
                key={shelf.shelf}
                changeShelf={this.props.changeShelf}
                text={shelf.text}
                books={this.props.books.filter(
                  book => book.shelf === shelf.shelf
                )}
              />
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
