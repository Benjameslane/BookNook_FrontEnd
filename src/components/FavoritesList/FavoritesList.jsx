// src/components/FavoritesList/FavoritesList.jsx

import React from 'react';
import Book from '../Book/Book';  // Assuming you have a Book component to display individual books
import './FavoritesList.css';

const FavoritesList = ({ favorites }) => {
  return (
    <div className="favorites-list">
      {favorites.length === 0 ? (
        <p>You have no favorites yet!</p>
      ) : (
        favorites.map(book => <Book key={book.id} book={book} />)
      )}
    </div>
  );
}

export default FavoritesList;
