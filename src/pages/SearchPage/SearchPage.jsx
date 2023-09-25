import React, { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import ResultsList from '../../components/ResultsList/ResultsList';
import axios from 'axios';

const GOOGLE_API_BASE_URL = "https://www.googleapis.com/books/v1";

const SearchPage = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(`${GOOGLE_API_BASE_URL}/volumes?q=${query}`);
      setBooks(response.data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ResultsList books={books} />
    </div>
  );
};

export default SearchPage;
