import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import { AiOutlineExpand } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Properties() {
  const [token, setToken] = useState(null);
  const [likedItems, setLikedItems] = useState([]);
  const [properties, setProperties] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const t = localStorage.getItem('token');
    setToken(t);
  }, []);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('http://localhost:3000/accommodations', {
          headers: {
            'Authorization': token ? `Bearer ${token}` : '',
          },
        });
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setProperties(data);
      } catch (e) {
        console.error(e);
      }
    }
    if (token) fetchProperties();
  }, [token]);

  const toggleLike = (index) => {
    setLikedItems((prev) => {
      const updated = prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index];

      if (!prev.includes(index)) {
        const favouriteItems = JSON.parse(localStorage.getItem('favourites')) || [];
        const selected = properties[index];
        const exists = favouriteItems.some(item =>
          item.title === selected.title && item.img === selected.img
        );
        if (!exists) {
          favouriteItems.push(selected);
          localStorage.setItem('favourites', JSON.stringify(favouriteItems));
        }
      }

      return updated;
    });
  };

  const getImageUrl = (image) => {
    if (!image || (typeof image === 'object' && Object.keys(image).length === 0)) {
      return 'https://i.pravatar.cc/400';
    }

    let img = image;

    if (Array.isArray(img)) {
      img = img[0];
    }

    if (typeof img === 'object') {
      img = img.url || img.path || '';
    }

    if (typeof img === 'string' && (img.startsWith('http') || img.startsWith('data:'))) {
      return img;
    }

    return `http://localhost:3000/uploads/${img}`;
  };

  return (
    <div>
      <SearchBar />

      <div className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Properties</h2>
          <p className="text-gray-500 mt-2">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-6 justify-between">
          {properties.length === 0 ? (
            <div className="w-full text-center text-gray-500">Hech qanday property topilmadi</div>
          ) : (
            properties.map((item, index) => (
              <div
                key={item.id || index}
                className="w-[30%] bg-white rounded-lg shadow-lg overflow-hidden p-5 flex flex-col"
              >
                <div className="relative">
                  <img
                    src={getImageUrl(item.img)}
                    alt={item.title || 'Property'}
                    className="w-full h-56 object-cover rounded-md"
                  />
                  <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-2 py-1 rounded">
                    FEATURED
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    {item.listing_type || 'FOR SALE'}
                  </div>
                </div>

                <div className="pt-4 flex flex-col flex-grow">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.adress || item.location || 'No address'}</p>

                  <div className="flex items-center justify-between text-gray-600 text-sm mt-4">
                    <div className="flex items-center gap-1">
                      <FaBed /> {item.beds || 0} Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath /> {item.baths || 0} Baths
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
                    <div className="flex items-center gap-1">
                      <FaCar /> {item.garage || 0} Garage
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRulerCombined /> {item.area || 0} sqft
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
                      {/* Expand (Details) tugmasi */}
                      <button
                        onClick={() => navigate(`/property/${item.id}`, { state: item })}
                        className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
                      >
                        <AiOutlineExpand className="text-gray-600 text-lg" />
                      </button>

                      {/* Like tugmasi */}
                      <button
                        onClick={() => toggleLike(index)}
                        className={`w-9 h-9 flex items-center justify-center rounded-full shadow transition 
                          ${likedItems.includes(index) ? "bg-red-500" : "bg-white hover:bg-gray-100"}`}
                      >
                        <FiHeart
                          className={`text-lg ${likedItems.includes(index) ? "text-white" : "text-gray-700"}`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
