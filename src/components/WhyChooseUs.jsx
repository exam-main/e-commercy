import React from 'react';
import { FaSmile, FaHome, FaDollarSign, FaMapMarkerAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaSmile size={30} className="text-blue-600" />,
      title: "Trusted By Thousands",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      icon: <FaHome size={30} className="text-blue-600" />,
      title: "Wide Range Of Properties",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      icon: <FaDollarSign size={30} className="text-blue-600" />,
      title: "Financing Made Easy",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
    {
      icon: <FaMapMarkerAlt size={30} className="text-blue-600" />,
      title: "See Neighborhoods",
      description:
        "With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">Why Choose Us</h2>
        <p className="text-gray-500 mb-10">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-3">
              {item.icon}
              <h3 className="font-semibold text-gray-700">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
