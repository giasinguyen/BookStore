import { useState } from 'react';
import { sampleBooks } from './data/sampleBooks';
import './App.css';

function App() {
  const [books, setBooks] = useState(sampleBooks);

  // Hàm xóa sách (sẽ được triển khai ở bước sau)
  const handleDelete = (id) => {
    console.log(`Xóa sách có id: ${id}`);
    // Chức năng xóa sẽ được triển khai ở bước 4
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Quản Lý Sách</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border-b text-left">Tên sách</th>
              <th className="py-2 px-4 border-b text-left">Tác giả</th>
              <th className="py-2 px-4 border-b text-left">Thể loại</th>
              <th className="py-2 px-4 border-b text-left">Năm</th>
              <th className="py-2 px-4 border-b text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{book.title}</td>
                <td className="py-2 px-4 border-b">{book.author}</td>
                <td className="py-2 px-4 border-b">{book.genre}</td>
                <td className="py-2 px-4 border-b">{book.year}</td>
                <td className="py-2 px-4 border-b">
                  <button 
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
                    onClick={() => handleDelete(book.id)}
                  >
                    Xóa
                  </button>
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