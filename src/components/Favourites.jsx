import React, { useEffect, useState } from 'react';

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // localStorage dan sevimlilarni o‘qib olish
    const favs = JSON.parse(localStorage.getItem('favourites')) || [];
    setFavourites(favs);
  }, []);

  if (favourites.length === 0) {
    return <p>Sevimlilar mavjud emas</p>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Sevimlilar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favourites.map((property) => (
          <div key={property.id} className="border rounded p-4 shadow">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{property.title}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-blue-600 font-bold mt-1">{property.priceNew}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
