import React from 'react';
import Book from './Book';
import propTypes from 'prop-types';

const BookShelf = ({ text, books, changeShelf, changeShelfForSearch }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{text}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book
              key={book.id}
              book={book}
              changeShelf={changeShelf}
              changeShelfForSearch={changeShelfForSearch}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  text: propTypes.string.isRequired,
  books: propTypes.array.isRequired,
  changeShelf: propTypes.func.isRequired,
  changeShelfForSearch: propTypes.func,
};

export default BookShelf;
