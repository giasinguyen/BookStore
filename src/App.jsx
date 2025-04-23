import { useState } from 'react';
import { sampleBooks } from './data/sampleBooks';
import './App.css';

function App() {
  const [books, setBooks] = useState(sampleBooks);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });

  // Hàm xóa sách (sẽ được triển khai ở bước sau)
  const handleDelete = (id) => {
    console.log(`Xóa sách có id: ${id}`);
    // Chức năng xóa sẽ được triển khai ở bước 4
  };

  // Hàm xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({
      ...newBook,
      [name]: value
    });
  };

  // Hàm thêm sách mới
  const handleAddBook = () => {
    // Kiểm tra dữ liệu không được để trống
    if (!newBook.title || !newBook.author || !newBook.genre || !newBook.year) {
      alert('Vui lòng nhập đầy đủ thông tin sách!');
      return;
    }

    // Kiểm tra năm là số hợp lệ
    const yearValue = parseInt(newBook.year);
    if (isNaN(yearValue)) {
      alert('Năm phải là số!');
      return;
    }

    // Tạo sách mới với ID là timestamp hiện tại
    const newBookWithId = {
      ...newBook,
      id: Date.now(),
      year: yearValue
    };

    // Thêm sách mới vào danh sách
    setBooks([...books, newBookWithId]);

    // Reset form
    setNewBook({
      title: '',
      author: '',
      genre: '',
      year: ''
    });
  };

  return (
    <div className="container">
      <h1>Quản Lý Sách</h1>
      
      <div className="form-container">
        <h2>Thêm Sách Mới</h2>
        <div className="form-group">
          <label>Tên sách:</label>
          <input
            type="text"
            name="title"
            value={newBook.title}
            onChange={handleInputChange}
            placeholder="Nhập tên sách"
          />
        </div>
        
        <div className="form-group">
          <label>Tác giả:</label>
          <input
            type="text"
            name="author"
            value={newBook.author}
            onChange={handleInputChange}
            placeholder="Nhập tên tác giả"
          />
        </div>
        
        <div className="form-group">
          <label>Thể loại:</label>
          <input
            type="text"
            name="genre"
            value={newBook.genre}
            onChange={handleInputChange}
            placeholder="Nhập thể loại"
          />
        </div>
        
        <div className="form-group">
          <label>Năm:</label>
          <input
            type="text"
            name="year"
            value={newBook.year}
            onChange={handleInputChange}
            placeholder="Nhập năm xuất bản"
          />
        </div>
        
        <button className="btn-add" onClick={handleAddBook}>Thêm sách</button>
      </div>
      
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
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
                <td>{book.year}</td>
                <td>
                  <button onClick={() => handleDelete(book.id)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;