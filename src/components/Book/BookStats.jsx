import React from 'react';

function BookStats({ totalBooks, displayedBooks }) {
  return (
    <div className="book-stats">
      <p>Tổng số sách: <strong>{totalBooks}</strong></p>
      <p>Hiển thị: <strong>{displayedBooks}</strong> sách</p>
    </div>
  );
}

export default BookStats;