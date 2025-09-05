
import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/public/images/unsplash_g39p1kDjvSY.png')" }}>
      <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-4xl font-semibold mb-4">
            Vermont Farmhouse With Antique Jail is the Week’s Most Popular Home
          </h1>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded mt-4">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
