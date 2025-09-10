import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { AiOutlineExpand } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';


export default function Favourite() {
    const token = localStorage.getItem('token', 'fake_token_123');

  const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (index) => {
    setLikedItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) 
        : [...prev, index] 
    );
  };
  const properties = [
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/a46173493b2fca6785ac30284fd0495de6b60b0c.jpg',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user1.png',
    },
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/images.png',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user2.png',
    },
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/images (1).png',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user.png',
    },
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/a46173493b2fca6785ac30284fd0495de6b60b0c.jpg',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user1.png',
    },
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/images.png',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user2.png',
    },
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/images (1).png',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user.png',
    },
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/a46173493b2fca6785ac30284fd0495de6b60b0c.jpg',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user1.png',
    },
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/images.png',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user2.png',
    },
    {
      title: 'New Apartment Nice View',
      location: 'Quincy St, Brooklyn, NY, USA',
      image: '/images/images (1).png',
      beds: 4,
      baths: 5,
      garage: 1,
      area: '1200 Sq Ft',
      priceOld: '$2,800/mo',
      priceNew: '$7,500/mo',
      agent: '/images/user.png',
    },
  ];

  return (
    <div>


      <div className="py-16 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Favorites
          </h2>
          <p className="text-gray-500 mt-2">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {properties.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
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
                      src={item.agent}
                      className="w-10 h-10 rounded-full absolute -bottom-5 right-3 border-2 border-white"
                      alt="agent"
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

                    <div className="mt-4 flex items-center justify-between">
                      <div>
                        <span className="line-through text-gray-400 text-sm">
                          {item.priceOld}
                        </span>
                        <p className="text-blue-600 font-bold text-lg">
                          {item.priceNew}
                        </p>
                      </div>


                      <div className="flex items-center gap-2">
                        <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
                          <AiOutlineExpand className="text-gray-600 text-lg" />
                        </button>
                        <button
                          onClick={() => toggleLike(index)}
                          className={`w-9 h-9 flex items-center justify-center rounded-full shadow transition 
                            ${likedItems.includes(index) ? "bg-white" : "bg-red-500 hover:bg-gray-100"}`}
                        >
                          <FiHeart
                            className={`text-lg ${
                              likedItems.includes(index) ? "text-gray-700" : "text-white"
                            }`}
                        />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </div>
  );
}
