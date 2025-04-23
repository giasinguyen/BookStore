import React from 'react';
import BookItem from './BookItem';

function BookList({ books, onDelete }) {
  return (
    <div className="book-table">
      <table>
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Thể loại</th>
            <th>Năm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <BookItem key={book.id} book={book} onDelete={onDelete} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookList;