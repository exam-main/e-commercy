import React from 'react';
import { FaSearch, FaSlidersH } from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className="bg-white shadow p-4 flex justify-center">
      <div className="flex gap-2 w-full max-w-4xl">
       
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          className="flex-1 border border-gray-300 px-4 py-2 rounded outline-none"
        />

       
        <button className="flex items-center gap-1 border border-gray-300 px-4 py-2 rounded text-gray-700 hover:bg-gray-100 transition">
          <FaSlidersH />
          <span className="text-sm">Advanced</span>
        </button>

       
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          <FaSearch />
          Search
        </button>
      </div>
    </div>
  );
}
