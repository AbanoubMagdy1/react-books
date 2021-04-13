import React from 'react';
import { shelves } from '../screens/HomeScreen';

const Book = ({ book, changeShelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`,
            }}
          />
          <div className="book-shelf-changer">
            <select
              value={book.shelf}
              onChange={e => changeShelf(book, e.target.value)}
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
        <div className="book-authors">{book.authors.join(', ')}</div>
      </div>
    </li>
  );
};

export default Book;
