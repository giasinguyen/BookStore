import React from 'react';

function BookForm({ newBook, onInputChange, onAddBook }) {
  return (
    <div className="form-container">
      <h2>Thêm Sách Mới</h2>
      <div className="form-group">
        <label>Tên sách:</label>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={onInputChange}
          placeholder="Nhập tên sách"
        />
      </div>
      
      <div className="form-group">
        <label>Tác giả:</label>
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={onInputChange}
          placeholder="Nhập tên tác giả"
        />
      </div>
      
      <div className="form-group">
        <label>Thể loại:</label>
        <input
          type="text"
          name="genre"
          value={newBook.genre}
          onChange={onInputChange}
          placeholder="Nhập thể loại"
        />
      </div>
      
      <div className="form-group">
        <label>Năm:</label>
        <input
          type="text"
          name="year"
          value={newBook.year}
          onChange={onInputChange}
          placeholder="Nhập năm xuất bản"
        />
      </div>
      
      <button className="btn-add" onClick={onAddBook}>Thêm sách</button>
    </div>
  );
}

export default BookForm;