import React from 'react';

const properties = [
  {
    id: 1,
    image: 'public/images/images.png',
    title: 'New Apartment Nice View',
    address: 'Quincy St, Brooklyn, NY, USA',
    beds: 4,
    baths: 5,
    garage: 1,
    area: 1200,
    price: 7500,
    oldPrice: 2800,
    featured: true,
    forSale: true,
    userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 2,
    image: 'public/images/images (1).png',
    title: 'New Apartment Nice View',
    address: 'Quincy St, Brooklyn, NY, USA',
    beds: 4,
    baths: 5,
    garage: 1,
    area: 1200,
    price: 7500,
    oldPrice: 2800,
    featured: true,
    forSale: true,
    userAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 3,
    image: 'public/images/images (2).png',
    title: 'New Apartment Nice View',
    address: 'Quincy St, Brooklyn, NY, USA',
    beds: 4,
    baths: 5,
    garage: 1,
    area: 1200,
    price: 7500,
    oldPrice: 2800,
    featured: true,
    forSale: true,
    userAvatar: 'https://randomuser.me/api/portraits/men/45.jpg',     
  },
];

const PropertyCard = ({ property, active }) => (
  <div
    className={`bg-white rounded-md shadow-md relative p-4 max-w-sm ${
      active ? 'border-2 border-white' : ''
    }`}
  >
    <div className="relative">
      <img
        src={property.image}
        alt={property.title}
        className="rounded-md w-full h-48 object-cover"
      />
      {property.featured && (
        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
          FEATURED
        </span>
      )}
      {property.forSale && (
        <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
          FOR SALE
        </span>
      )}
      <img
        src={property.userAvatar}
        alt="User avatar"
        className="w-10 h-10 rounded-full border-2 border-white absolute bottom-[-15px] right-4"
      />
    </div>

    <div className="mt-8">
      <h3 className="font-semibold text-sm">{property.title}</h3>
      <p className="text-xs text-gray-500">{property.address}</p>

      <div className="flex justify-between text-xs text-gray-500 mt-3">
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns=""
          >
            <path d="M3 12h18M9 21V9m6 12V9" />
          </svg>
          {property.beds} Beds
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns=""
          >
            <path d="M12 3v18M9 15h6" />
          </svg>
          {property.baths} Baths
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns=""
          >
            <path d="M5 16l3-3 4 4 6-6" />
          </svg>
          {property.garage} Garage
        </div>
        <div className="flex items-center gap-1">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns=" "
          >
            <path d="M3 7h18M3 12h18M3 17h18" />
          </svg>
          {property.area} Sq Ft
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center text-sm font-semibold">
        <div>
          <span className="line-through text-gray-400 mr-2">${property.oldPrice}/mo</span>
          <span>${property.price}/mo</span>
        </div>
        <button
          aria-label="Favorite"
          className="text-gray-400 hover:text-red-500 focus:outline-none"
        >
          
        </button>
      </div>
    </div>
  </div>
);

export default function Recommended() {
  return (
 <section className="py-12 bg-gradient-to-b from-[#444] to-[#222]">
  <div className="max-w-6xl mx-auto px-4 text-center text-white">
    <h2 className="text-xl font-bold mb-2">Recommended</h2>
    <p className="text-sm text-gray-300 mb-8">
      Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
    </p>

    <div className="flex gap-6 justify-center overflow-x-auto scrollbar-hide">
      {properties.map((property, idx) => (
        <PropertyCard key={property.id} property={property} active={idx === 0} />
      ))}
    </div>
  </div>
</section>

  );
}
