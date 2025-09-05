// components/Testimonials.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
    {
        
        role: 'Designer',
        image: '/public/images/user.png',
        quote:
            '“ I believe in lifelong learning and Skola is a great place to learn from experts. I’ve learned a lot and recommend it to all my friends ”',
    },
    {
       
        role: 'Designer',
        image: '/public/images/user2.png',
        quote:
            '“ I believe in lifelong learning and Skola is a great place to learn from experts. I’ve learned a lot and recommend it to all my friends ”',
    },
    {
       
        role: 'Designer',
        image: '/public/images/user1.png',
        quote:
            '“ I believe in lifelong learning and Skola is a great place to learn from experts. I’ve learned a lot and recommend it to all my friends ”',
    },
];

const Testimonials = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">Testimonials</h2>
                <p className="text-gray-500 mt-2">
                    Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white rounded-lg shadow-md px-6 pt-8 pb-12 text-center relative">
                                <p className="text-gray-600 italic">{item.quote}</p>

                                
                                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-16">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                                    />
                                </div>

                                
                                <div className="mt-10">
                                    <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                    <span className="text-sm text-gray-500">{item.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;
