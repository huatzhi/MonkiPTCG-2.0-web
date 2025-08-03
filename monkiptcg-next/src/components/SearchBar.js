'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { searchData, searchItems } from '../data/searchData';

export default function SearchBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim().length === 0) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    
    // 使用优化后的搜索函数
    setTimeout(() => {
      const results = searchItems(query);
      setSearchResults(results);
      setIsLoading(false);
    }, 300);
  };

  const handleResultClick = () => {
    setIsSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  };

  // 点击外部关闭搜索
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsSearchOpen(false);
          setSearchQuery('');
          setSearchResults([]);
        }
      };

      if (isSearchOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isSearchOpen]);

  return (
    <div className="search-container" ref={searchRef}>
      {/* Search Button */}
      <button 
        className="search-button"
        onClick={toggleSearch}
        aria-label="Search"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </button>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="search-overlay">
          <div className="search-modal">
            <div className="search-header">
              <div className="search-input-container">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search news, articles, pages..."
                  value={searchQuery}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <button 
                  className="close-search"
                  onClick={toggleSearch}
                  aria-label="Close search"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div className="search-results">
              {isLoading && (
                <div className="search-loading">
                  <div className="loading-spinner"></div>
                  <span>Searching...</span>
                </div>
              )}

              {!isLoading && searchQuery && searchResults.length === 0 && (
                <div className="no-results">
                  <span>No results found for "{searchQuery}"</span>
                </div>
              )}

              {!isLoading && searchResults.length > 0 && (
                <div className="results-list">
                  {searchResults.map((result, index) => (
                    <Link 
                      key={`${result.type}-${result.id}-${index}`} 
                      href={result.url}
                      className="result-item"
                      onClick={handleResultClick}
                    >
                      <div className="result-type">{result.type}</div>
                      <div className="result-title">{result.title}</div>
                      <div className="result-excerpt">{result.excerpt}</div>
                    </Link>
                  ))}
                </div>
              )}

              {!isLoading && !searchQuery && (
                <div className="search-suggestions">
                  <h3>Popular searches</h3>
                  <div className="suggestion-tags">
                    <button onClick={() => handleSearch('Tommy Leong')}>Tommy Leong</button>
                    <button onClick={() => handleSearch('Gardevoir')}>Gardevoir</button>
                    <button onClick={() => handleSearch('Tournament')}>Tournament</button>
                    <button onClick={() => handleSearch('Team Members')}>Team Members</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 