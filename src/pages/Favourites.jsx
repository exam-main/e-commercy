import React, { useState, useEffect } from 'react';
import { AiOutlineExpand } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';

export default function Favourite() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const savedFavourites = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(savedFavourites);
  }, []);

  const removeFromFavourites = (index) => {
    const updatedFavourites = favourites.filter((_, i) => i !== index);
    setFavourites(updatedFavourites);
    localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
  };

  return (
    <div>
      <div className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Favourites
          </h2>
          <p className="text-gray-500 mt-2">
            Saqlab qo‘yilgan uylaringiz ro‘yxati
          </p>
        </div>

        {favourites.length === 0 ? (
          <p className="text-center text-gray-500">Siz hali hech qanday favourite qo‘shmagansiz.</p>
        ) : (
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {favourites.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image || 'https://i.pravatar.cc/400'}
                    alt={item.title || 'Property'}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-2 py-1 rounded">
                    FEATURED
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    {item.listing_type || 'FOR SALE'}
                  </div>
                  <img
                    src={item.agent || 'https://i.pravatar.cc/40'}
                    className="w-10 h-10 rounded-full absolute -bottom-5 right-3 border-2 border-white"
                    alt="agent"
                  />
                </div>

                <div className="p-5 pt-8">
                  <h3 className="font-semibold text-gray-800">{item.title || 'No title'}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.location || item.adress || 'No address'}</p>

                  <div className="flex items-center justify-between text-gray-600 text-sm mt-4">
                    <div className="flex items-center gap-1">
                      <FaBed /> {item.beds ?? 0} Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath /> {item.baths ?? 0} Baths
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
                    <div className="flex items-center gap-1">
                      <FaCar /> {item.garage ?? 0} Garage
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRulerCombined /> {item.area ?? 0} sqft
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <span className="line-through text-gray-400 text-sm">
                        {item.priceOld || ''}
                      </span>
                      <p className="text-blue-600 font-bold text-lg">
                        {item.priceNew || item.price || 'N/A'}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                        <AiOutlineExpand className="text-gray-600 text-lg" />
                      </button>
                      <button
                        onClick={() => removeFromFavourites(index)}
                        className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center text-white"
                        title="Remove from favourites"
                      >
                        <FiHeart className="text-lg" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
