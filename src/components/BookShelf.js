import React from 'react';
import Book from './Book';

const BookShelf = ({ text, books, changeShelf, remove }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{text}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <Book book={book} changeShelf={changeShelf} remove={remove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
