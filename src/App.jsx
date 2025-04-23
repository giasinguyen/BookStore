import { useState, useEffect } from 'react';
import { sampleBooks } from './data/sampleBooks';
import BookForm from './components/Book/BookForm';
import FilterBar from './components/Book/FilterBar';
import BookList from './components/Book/BookList';
import BookStats from './components/Book/BookStats';
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
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-indigo-700">
        📚 Quản Lý Sách
      </h1>

      <BookForm
        newBook={newBook}
        onInputChange={handleInputChange}
        onAddBook={handleAddBook}
      />

      <FilterBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        selectedGenre={selectedGenre}
        onGenreFilter={handleGenreFilter}
        genres={genres}
      />

      <BookStats
        totalBooks={books.length}
        displayedBooks={filteredBooks.length}
      />

      <BookList
        books={filteredBooks}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;