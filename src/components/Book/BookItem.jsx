import React from 'react';

function BookItem({ book, onDelete }) {
  return (
    <tr key={book.id}>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
      <td>{book.year}</td>
      <td>
        <button onClick={() => onDelete(book.id)}>Xóa</button>
      </td>
    </tr>
  );
}

export default BookItem;