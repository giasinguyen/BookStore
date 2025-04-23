import { useState, useEffect } from 'react';
import { sampleBooks } from './data/sampleBooks';
import './App.css';

function App() {
  // Lấy dữ liệu từ localStorage hoặc sử dụng dữ liệu mẫu nếu không có
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem('books');
    return savedBooks ? JSON.parse(savedBooks) : sampleBooks;
  });
  
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
    genre: '',
    year: ''
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [genres, setGenres] = useState([]);

  // Trích xuất tất cả các thể loại duy nhất từ danh sách sách
  useEffect(() => {
    const uniqueGenres = [...new Set(books.map(book => book.genre))];
    setGenres(uniqueGenres);
  }, [books]);

  // Lưu danh sách sách vào localStorage mỗi khi có thay đổi
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  // Hàm xóa sách
  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa cuốn sách này?')) {
      const updatedBooks = books.filter(book => book.id !== id);
      setBooks(updatedBooks);
      // localStorage sẽ được cập nhật tự động nhờ useEffect
    }
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
    if (!newBook.title || !newBook.author || !newBook.genre || !newBook.year) {
      alert('Vui lòng nhập đầy đủ thông tin sách!');
      return;
    }

    const yearValue = parseInt(newBook.year);
    if (isNaN(yearValue)) {
      alert('Năm phải là số!');
      return;
    }

    const newBookWithId = {
      ...newBook,
      id: Date.now(),
      year: yearValue
    };

    setBooks([...books, newBookWithId]);
    // localStorage sẽ được cập nhật tự động nhờ useEffect

    setNewBook({
      title: '',
      author: '',
      genre: '',
      year: ''
    });
  };

  // Hàm xử lý tìm kiếm theo tên sách
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Hàm xử lý lọc theo thể loại
  const handleGenreFilter = (e) => {
    setSelectedGenre(e.target.value);
  };

  // Lọc sách theo từ khóa tìm kiếm và thể loại
  const filteredBooks = books.filter(book => {
    // Lọc theo tên sách (không phân biệt hoa thường)
    const matchesSearchTerm = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Lọc theo thể loại (nếu có chọn thể loại)
    const matchesGenre = selectedGenre === '' || book.genre === selectedGenre;
    
    // Trả về true nếu thỏa mãn cả hai điều kiện
    return matchesSearchTerm && matchesGenre;
  });

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
      
      <div className="filters-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Tìm kiếm theo tên sách..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </div>
        
        <div className="genre-filter">
          <label>Lọc theo thể loại:</label>
          <select 
            value={selectedGenre} 
            onChange={handleGenreFilter}
            className="genre-select"
          >
            <option value="">Tất cả thể loại</option>
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="book-stats">
        <p>Tổng số sách: <strong>{books.length}</strong></p>
        <p>Hiển thị: <strong>{filteredBooks.length}</strong> sách</p>
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
            {filteredBooks.map((book) => (
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