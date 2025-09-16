import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';

const BASE_URL = 'https://i.pravatar.cc/400'; 

const RecentProperti = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/accommodations')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch data');
        return res.json();
      })
      .then(data => {
        setProperties(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading properties...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Error: {error}</p>;
  if (!properties.length) return <p className="text-center py-10">No properties found.</p>;

  // Rasm URLini to'g'ri olish uchun helper funktsiya
  const getImageUrl = (url) => {
    if (!url) return 'https://i.pravatar.cc/400'; // fallback image agar rasm bo'lmasa
    return url.startsWith('http') ? url : `${BASE_URL}${url}`;
  };

  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Recent Properties for Rent
        </h2>
        <p className="text-gray-500 mt-2">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {properties.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                  <img
                    src={getImageUrl(item.image)}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-2 py-1 rounded">
                    FEATURED
                  </div>
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    FOR SALE
                  </div>
                  <img
                    src={getImageUrl(item.agent)}
                    alt="agent"
                    className="w-10 h-10 rounded-full absolute -bottom-5 right-3 border-2 border-white"
                  />
                </div>
                <div className="p-5 pt-8">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                  <div className="flex items-center justify-between text-gray-600 text-sm mt-4">
                    <div className="flex items-center gap-1">
                      <FaBed /> {item.beds} Beds
                    </div>
                    <div className="flex items-center gap-1">
                      <FaBath /> {item.baths} Baths
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
                    <div className="flex items-center gap-1">
                      <FaCar /> {item.garage} Garage
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRulerCombined /> {item.area}
                    </div>
                  </div>
                  <div className="mt-4">
                    <span className="line-through text-gray-400 text-sm">{item.priceOld}</span>
                    <p className="text-blue-600 font-bold text-lg">{item.priceNew}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentProperti;
