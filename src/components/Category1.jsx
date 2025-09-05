import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const categories = [
  {
    title: 'House',
    image: '/public/images/e2c1b220eb21ff462cdc4d29fe96321026ddfaf6.jpg',
    icon: '/public/images/home 1.png',
  },
  {
    title: 'Apartment',
    image: '/public/images/a46173493b2fca6785ac30284fd0495de6b60b0c.jpg',
    icon: '/public/images/apartment.png',
  },
  {
    title: 'Office',
    image: '/public/images/26d4b35fa4aad17a5d27392d202612988fcf4428.jpg',
    icon: '/public/images/business-and-trade.png',
  },
  {
    title: 'Villa',
    image: '/public/images/2b254a215daf4df85e7310b212cf310826ea9dbc.jpg',
    icon: '/public/images/villa.png',
  },
];

const Category1 = () => {
  return (
    <div className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Category</h2>
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
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white">
                  <img src={item.icon} alt={`${item.title} icon`} className="w-10 h-10 mb-3" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Category1;
