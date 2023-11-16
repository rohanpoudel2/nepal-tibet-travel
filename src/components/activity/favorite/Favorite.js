"use client"
import { useEffect, useState } from "react";

const Favorite = ({ id }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
  }, []);

  const isFavorite = favorites.includes(id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      setFavorites((prevFavorites) => prevFavorites.filter((tripId) => tripId !== id));
    } else {
      setFavorites((prevFavorites) => [...prevFavorites, id]);
    }
  };

  useEffect(() => {
    setFavorites((prevFavorites) => {
      localStorage.setItem('favorites', JSON.stringify(prevFavorites));
      return prevFavorites;
    });
  }, [favorites]);

  return (
    <button
      className={`px-2 py-1 font-medium flex border-2 ${isFavorite ? 'border-red-300' : 'border-gray-300'} items-center gap-2 tracking-wide transition-colors duration-300 transform rounded-lg focus:outline-none focus:ring ${isFavorite ? 'focus:ring-red-300' : 'focus:ring-gray-300'} focus:ring-opacity-80`}
      onClick={handleFavoriteClick}
    >
      {isFavorite ? (
        <i className="fa-solid fa-heart text-red-500" />
      ) : (
        <i className="fa-regular fa-heart" />
      )}
      <span className={`font-semibold ${isFavorite ? 'text-red-500' : 'text-base'}`}>Favorite</span>
    </button>
  );
};

export default Favorite;
