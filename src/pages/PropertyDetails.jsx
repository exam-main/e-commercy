import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import RelatedProperties from '../components/RelatedProperties';



const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function PropertyDetails() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(state);

  useEffect(() => {
    if (!state) {
      fetch(`http://localhost:3000/accommodations/${id}`)
        .then(res => res.json())
        .then(data => setProperty(data))
        .catch(err => console.error(err));
    }
  }, [state, id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  const handleBuyClick = () => {
    navigate('/request', { state: property });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-10">
      <h1 className="text-4xl font-extrabold mb-3 text-gray-800">{property.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {property.adress || property.location || 'No address provided'}
      </p>

      <img
        src={
          !property.img
            ? 'https://i.pravatar.cc/400'
            : Array.isArray(property.img)
              ? property.img[0]?.url || property.img[0] || 'https://i.pravatar.cc/400'
              : typeof property.img === 'object'
                ? property.img.url || property.img.path || 'https://i.pravatar.cc/400'
                : `http://localhost:3000/uploads/${property.img}`
        }
        alt={property.title}
        className="w-full h-96 object-cover rounded-md mb-6 shadow-md"
      />

      {/* Property info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-6">
        <div className="bg-blue-100 p-4 rounded-md shadow-sm">
          <strong className="block text-lg">{property.beds || 0}</strong>
          <span className="text-gray-600">Beds</span>
        </div>
        <div className="bg-blue-100 p-4 rounded-md shadow-sm">
          <strong className="block text-lg">{property.baths || 0}</strong>
          <span className="text-gray-600">Baths</span>
        </div>
        <div className="bg-blue-100 p-4 rounded-md shadow-sm">
          <strong className="block text-lg">{property.garage || 0}</strong>
          <span className="text-gray-600">Garage</span>
        </div>
        <div className="bg-blue-100 p-4 rounded-md shadow-sm">
          <strong className="block text-lg">{property.area || 0} sqft</strong>
          <span className="text-gray-600">Area</span>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <p className="text-3xl font-bold text-green-600">
          {property.priceNew || property.price || 'N/A'}
        </p>
        {property.priceOld && (
          <p className="line-through text-gray-400 text-lg">{property.priceOld}</p>
        )}
      </div>

      <div className="text-gray-700 text-lg leading-relaxed mb-10">
        <p>{property.description || 'No description available.'}</p>
      </div>

      {/* Map */}
      {property.latitude && property.longitude ? (
        <div className="h-96 w-full rounded-lg shadow-lg overflow-hidden mb-10">
          <MapContainer
            center={[property.latitude, property.longitude]}
            zoom={15}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[property.latitude, property.longitude]} icon={markerIcon}>
              <Popup>{property.adress || 'Property location'}</Popup>
            </Marker>
          </MapContainer>
        </div>
      ) : (
        <p className="text-center text-gray-500 mb-10">No map coordinates available.</p>
      )}

      {/* ✅ Related Properties ko‘rsatish */}
      <RelatedProperties excludeId={property.id} />

      {/* Buy Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={handleBuyClick}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition duration-300 text-lg"
        >
          Buy Now
        </button>
      </div>

    </div>
  );
}
