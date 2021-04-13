import React, { memo } from 'react';
import propTypes from 'prop-types';
import { shelves } from '../screens/HomeScreen';

const Book = ({ book, changeShelf, changeShelfForSearch }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks && book.imageLinks.smallThumbnail
                  ? book.imageLinks.smallThumbnail
                  : '/imgs/bookCover.jpg'
              })`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf}
              onChange={({ target }) => {
                changeShelf(book, target.value);
                if (changeShelfForSearch) {
                  changeShelfForSearch(book.id, target.value);
                }
              }}
            >
              <option value="move" disabled>
                Move to...
              </option>
              {shelves.map(shelf => (
                <option
                  key={shelf.shelf}
                  value={shelf.shelf}
                  disabled={shelf.shelf === book.shelf}
                >
                  {shelf.text}
                </option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(', ') : ''}
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: propTypes.object.isRequired,
  changeShelf: propTypes.func.isRequired,
  changeShelfForSearch: propTypes.func,
};

export default memo(Book);
