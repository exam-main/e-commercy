// components/MapSelector.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// 📌 Default Leaflet marker fix (CDN'dan rasm ishlatilyapti)
const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const LocationMarker = ({ setFormData }) => {
  const [position, setPosition] = useState(null);

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();
        const address = data?.display_name || "";
        const country = data?.address?.country || "";

        setFormData((prev) => ({
          ...prev,
          latitude: lat,
          longitude: lng,
          adress: address,
          country: country,
        }));
      } catch (error) {
        console.error("Geocoding error:", error);
      }
    },
  });

  return position ? <Marker position={position} icon={markerIcon} /> : null;
};

const MapSelector = ({ setFormData }) => {
  return (
    <div className="w-full h-[400px] relative z-0 overflow-hidden rounded-lg shadow border">
      <MapContainer
        center={[41.3111, 69.2797]} // Tashkent
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full z-0"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker setFormData={setFormData} />
      </MapContainer>
    </div>
  );
};

export default MapSelector;
