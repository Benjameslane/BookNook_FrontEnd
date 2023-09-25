// src/pages/FavoritesPage/FavoritesPage.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FavoritesList from '../../components/FavoritesList/FavoritesList';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // This is a placeholder URL. Replace with your actual endpoint.
    axios.get('/api/user/favorites')
      .then(response => {
        setFavorites(response.data);
      })
      .catch(error => {
        console.error("Error fetching favorites:", error);
      });
  }, []);

  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>
      <FavoritesList favorites={favorites} />
    </div>
  );
}

export default FavoritesPage;
