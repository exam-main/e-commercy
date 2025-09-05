import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';

const properties = [
  {
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: '/public/images/a46173493b2fca6785ac30284fd0495de6b60b0c.jpg',
    beds: 4,
    baths: 5,
    garage: 1,
    area: '1200 Sq Ft',
    priceOld: '$2,800/mo',
    priceNew: '$7,500/mo',
    agent: '/public/images/user1.png',
  },
  {
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: '/public/images/images.png',
    beds: 4,
    baths: 5,
    garage: 1,
    area: '1200 Sq Ft',
    priceOld: '$2,800/mo',
    priceNew: '$7,500/mo',
    agent: '/public/images/user2.png',
  },
  {
    title: 'New Apartment Nice View',
    location: 'Quincy St, Brooklyn, NY, USA',
    image: '/public/images/images (1).png',
    beds: 4,
    baths: 5,
    garage: 1,
    area: '1200 Sq Ft',
    priceOld: '$2,800/mo',
    priceNew: '$7,500/mo',
    agent: '/public/images/user.png',
  },
];

const RecentProperti = () => {
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
                  <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                  <div className="absolute top-3 left-3 bg-blue-700 text-white text-xs px-2 py-1 rounded">FEATURED</div>
                  <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">FOR SALE</div>
                  <img src={item.agent} className="w-10 h-10 rounded-full absolute -bottom-5 right-3 border-2 border-white" alt="agent" />
                </div>
                <div className="p-5 pt-8">
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{item.location}</p>
                  <div className="flex items-center justify-between text-gray-600 text-sm mt-4">
                    <div className="flex items-center gap-1"><FaBed /> {item.beds} Beds</div>
                    <div className="flex items-center gap-1"><FaBath /> {item.baths} Baths</div>
                  </div>
                  <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
                    <div className="flex items-center gap-1"><FaCar /> {item.garage} Garage</div>
                    <div className="flex items-center gap-1"><FaRulerCombined /> {item.area}</div>
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
