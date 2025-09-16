// components/RelatedProperties.jsx
import React, { useEffect, useState } from 'react';
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';

export default function RelatedProperties({ excludeId }) {
    const [token, setToken] = useState(null);
    const [properties, setProperties] = useState([]);

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
                const data = await response.json();
                const filtered = data.filter(item => item.id !== excludeId);
                setProperties(filtered.slice(0, 3)); // faqat 3 ta ko‘rsatish
            } catch (e) {
                console.error(e);
            }
        }

        if (token) fetchProperties();
    }, [token, excludeId]);

    const getImageUrl = (img) => {
        if (!img || (typeof img === 'object' && Object.keys(img).length === 0)) {
            return 'https://i.pravatar.cc/400';
        }

        if (Array.isArray(img)) {
            img = img[0];
        }

        if (typeof img === 'object') {
            img = img.url || img.path;
        }

        if (!img) return 'https://i.pravatar.cc/400'; 

        if (typeof img === 'string' && (img.startsWith('http') || img.startsWith('data:'))) {
            return img;
        }

        return `http://localhost:3000/uploads/${img}`;
    };


    return (
        <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Other Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((item) => (
                    <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img
                            src={getImageUrl(item.img)}
                            alt={item.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-4">
                            <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.adress || item.location}</p>
                            <div className="flex justify-between text-sm text-gray-600 mt-3">
                                <span><FaBed className="inline" /> {item.beds}</span>
                                <span><FaBath className="inline" /> {item.baths}</span>
                                <span><FaCar className="inline" /> {item.garage}</span>
                                <span><FaRulerCombined className="inline" /> {item.area} sqft</span>
                            </div>
                            <p className="mt-2 text-blue-600 font-bold">{item.priceNew || item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
