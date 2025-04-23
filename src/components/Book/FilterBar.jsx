import React from 'react';

function FilterBar({ searchTerm, onSearch, selectedGenre, onGenreFilter, genres }) {
  return (
    <div className="filters-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Tìm kiếm theo tên sách..."
          value={searchTerm}
          onChange={onSearch}
          className="search-input"
        />
      </div>
      
      <div className="genre-filter">
        <label>Lọc theo thể loại:</label>
        <select 
          value={selectedGenre} 
          onChange={onGenreFilter}
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
  );
}

export default FilterBar;