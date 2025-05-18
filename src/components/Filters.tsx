import React, { useState } from 'react';

interface FilterProps {
  onFilterChange: (filters: { [key: string]: string }) => void;
}

const Filters: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [author, setAuthor] = useState('');
  const [year, setYear] = useState('');
  const [keywords, setKeywords] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange({ author, year, keywords });
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: '24px auto',
        padding: 24,
        borderRadius: 12,
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        background: '#fff',
      }}
    >
      <h3 style={{ marginBottom: 20, textAlign: 'center', color: '#333' }}>Filter Papers</h3>
      <form onSubmit={handleSearch}>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 6, color: '#555' }}>
            Author
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: 6,
                border: '1px solid #ccc',
                marginTop: 4,
                fontSize: 15,
              }}
              placeholder="e.g. Jane Doe"
            />
          </label>
        </div>
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 6, color: '#555' }}>
            Year
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: 6,
                border: '1px solid #ccc',
                marginTop: 4,
                fontSize: 15,
              }}
              placeholder="e.g. 2021"
            />
          </label>
        </div>
        <div style={{ marginBottom: 20 }}>
          <label style={{ display: 'block', marginBottom: 6, color: '#555' }}>
            Keywords
            <input
              type="text"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: 6,
                border: '1px solid #ccc',
                marginTop: 4,
                fontSize: 15,
              }}
              placeholder="e.g. deep learning"
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px 0',
            borderRadius: 6,
            border: 'none',
            background: '#1976d2',
            color: '#fff',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer',
            boxShadow: '0 1px 4px rgba(25, 118, 210, 0.08)'
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Filters;