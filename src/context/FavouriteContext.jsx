import React, { createContext, useContext, useState, useEffect } from 'react';

const FavouriteContext = createContext();

export const FavouriteProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);


  useEffect(() => {
    const stored = localStorage.getItem('favourites');
    if (stored) {
      setFavourites(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const toggleFavourite = (property) => {
    const exists = favourites.find((item) => item.image === property.image);
    if (exists) {
      setFavourites(favourites.filter((item) => item.image !== property.image));
    } else {
      setFavourites([...favourites, property]);
    }
  };

  return (
    <FavouriteContext.Provider value={{ favourites, toggleFavourite }}>
      {children}
    </FavouriteContext.Provider>
  );
};

export const useFavourites = () => useContext(FavouriteContext);
