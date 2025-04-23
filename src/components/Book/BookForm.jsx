import React from 'react';

function BookForm({ newBook, onInputChange, onAddBook }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-700 border-b pb-2">
        Thêm Sách Mới
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Tên sách:
          </label>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={onInputChange}
            placeholder="Nhập tên sách"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Tác giả:
          </label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={onInputChange}
            placeholder="Nhập tên tác giả"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Thể loại:
          </label>
          <input
            type="text"
            name="genre"
            value={newBook.genre}
            onChange={onInputChange}
            placeholder="Nhập thể loại"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">
            Năm:
          </label>
          <input
            type="text"
            name="year"
            value={newBook.year}
            onChange={onInputChange}
            placeholder="Nhập năm xuất bản"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>
      
      <button 
        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        onClick={onAddBook}
      >
        Thêm sách
      </button>
    </div>
  );
}

export default BookForm;