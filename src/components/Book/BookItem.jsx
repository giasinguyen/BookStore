import React from 'react';

function BookItem({ book, onDelete }) {
  // Enhanced color mapping with more vibrant gradients
  const genreColors = {
    'Văn học': 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-blue-200',
    'Khoa học': 'bg-gradient-to-r from-green-50 to-green-100 text-green-800 border-green-200',
    'Công nghệ': 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-800 border-purple-200',
    'Tâm lý': 'bg-gradient-to-r from-amber-50 to-amber-100 text-amber-800 border-amber-200',
    'Kinh tế': 'bg-gradient-to-r from-emerald-50 to-emerald-100 text-emerald-800 border-emerald-200',
    'Lịch sử': 'bg-gradient-to-r from-rose-50 to-rose-100 text-rose-800 border-rose-200'
  };

  const defaultColor = 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 border-indigo-200';
  const genreColor = genreColors[book.genre] || defaultColor;

  return (
    <tr className="hover:bg-slate-50 transition-all duration-300 ease-in-out group border-b border-gray-200 last:border-b-0">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-12 w-12 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center text-indigo-500 group-hover:bg-gradient-to-br group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-300 transform group-hover:scale-110 shadow-sm group-hover:shadow">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors text-base">
              {book.title}
            </div>
            <div className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-md inline-block mt-1 group-hover:bg-indigo-50 transition-colors">
              ID: {book.id.toString().slice(-4)}
            </div>
          </div>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-gray-700 group-hover:text-gray-900 transition-colors flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 mr-1.5 group-hover:text-indigo-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {book.author}
        </div>
        <div className="text-xs text-gray-400 italic mt-1 pl-5.5">
          Tác giả
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-3 py-1.5 inline-flex text-xs leading-5 font-semibold rounded-full ${genreColor} shadow-sm border transform transition-all duration-300 group-hover:scale-105 group-hover:shadow`}>
          {book.genre}
        </span>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-col items-center">
          <div className="font-mono text-gray-600 group-hover:text-gray-900 transition-colors bg-gray-50 px-3 py-1 rounded-md group-hover:bg-yellow-50 border border-transparent group-hover:border-yellow-200 transition-all">
            {book.year}
          </div>
          <div className="text-xs text-gray-400 italic mt-1">
            Năm xuất bản
          </div>
        </div>
      </td>
      
      <td className="px-6 py-4 whitespace-nowrap text-right">
        <button 
          onClick={() => onDelete(book.id)}
          className="inline-flex items-center justify-center text-red-600 bg-white hover:bg-red-50 hover:text-red-700 font-medium px-3.5 py-1.5 rounded-lg transition-all duration-300 border border-transparent hover:border-red-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transform hover:-translate-y-0.5"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
          Xóa
        </button>
      </td>
    </tr>
  );
}

export default BookItem;