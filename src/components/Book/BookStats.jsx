import React from 'react';

function BookStats({ totalBooks, displayedBooks }) {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border-l-4 border-indigo-500 p-4 mb-6 shadow-sm">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-indigo-100 rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <p className="text-gray-700">
            Tổng số sách: <span className="font-bold text-indigo-700">{totalBooks}</span>
          </p>
        </div>
        
        <div className="flex items-center">
          <div className="bg-indigo-100 rounded-full p-2 mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-gray-700">
            Hiển thị: <span className="font-bold text-indigo-700">{displayedBooks}</span> sách
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookStats;