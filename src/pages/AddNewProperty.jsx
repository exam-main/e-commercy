import React, { useState, useEffect } from "react";
import MapSelector from "../components/MapSelector";
const AddNewProperty = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const userId = storedUser ? storedUser.id : null;
  const token = localStorage.getItem("token");

  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    adress: "",       
    price: "",
    disscount: "",     
    build_year: "",
    latitude: "",
    longitude: "",
    country: "Uzbekistan",
    map_url: "",
    listing_type: "SALE",
    user_id: userId || "",
    category_id: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error("Category fetch error:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userId) {
      alert("Iltimos, avval tizimga kiring");
      return;
    }

    const categoryIdNum = parseInt(formData.category_id, 10);
    if (isNaN(categoryIdNum)) {
      alert("Iltimos, to'g'ri kategoriya tanlang");
      return;
    }

    
    const payload = {
      ...formData,
      category_id: categoryIdNum,
      img: {},
      isActive: true,
      features: {},
      documents: {},
      extra_features: {},
      price: parseFloat(formData.price),
      disscount: parseFloat(formData.disscount), 
      build_year: Number(formData.build_year),
      latitude: parseFloat(formData.latitude) || 0,
      longitude: parseFloat(formData.longitude) || 0,
      listing_type: formData.listing_type.toUpperCase(),
    };

    try {
      const response = await fetch("http://localhost:3000/accommodations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Property created successfully!");
        console.log(result);
      } else {
        console.error("Server error:", result);

        let errorMsg = "Failed to create property.";
        if (result.message) {
          if (Array.isArray(result.message)) {
            errorMsg = result.message.join("\n");
          } else if (typeof result.message === "string") {
            errorMsg = result.message;
          } else if (typeof result.message === "object") {
            errorMsg = JSON.stringify(result.message);
          }
        }

        alert(errorMsg);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Kutilmagan xatolik yuz berdi.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-8">Add new property</h1>

      <form onSubmit={handleSubmit}>
        
        <div className="bg-white shadow p-6 rounded-lg mb-8">
          <h2 className="text-lg font-medium mb-4">Basic information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Property title*"
              className="border p-2 rounded"
              required
            />
            <select
              name="listing_type"
              value={formData.listing_type}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="SALE">Sale</option>
              <option value="RENT">Rent</option>
            </select>
          </div>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Property Description*"
            className="w-full border p-2 rounded mt-4"
            rows="4"
            required
          />

          <div className="mt-4">
            <label htmlFor="category_id" className="block mb-1 font-medium">
              Category*
            </label>
            <select
              name="category_id"
              id="category_id"
              value={formData.category_id}
              onChange={handleChange}
              className="border p-2 rounded w-full"
              required
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Location */}
        <div className="bg-white shadow p-6 rounded-lg mb-8">
          <h2 className="text-lg font-medium mb-4">Location</h2>

          <div className="mb-4">
            <MapSelector setFormData={setFormData} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="adress"
              value={formData.adress}
              onChange={handleChange}
              placeholder="Address"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
              className="border p-2 rounded"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              name="latitude"
              value={formData.latitude}
              onChange={handleChange}
              placeholder="Latitude"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="longitude"
              value={formData.longitude}
              onChange={handleChange}
              placeholder="Longitude"
              className="border p-2 rounded"
              required
            />
          </div>
        </div>


        {/* Price */}
        <div className="bg-white shadow p-6 rounded-lg mb-8">
          <h2 className="text-lg font-medium mb-4">Price</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="border p-2 rounded"
              required
            />
            <input
              type="number"
              name="disscount"    // backend 'discount' deb bo'lsa shu yer ham o'zgartirilishi kerak
              value={formData.disscount}
              onChange={handleChange}
              placeholder="Discount"
              className="border p-2 rounded"
              required
            />
          </div>
        </div>

        
        <div className="bg-white shadow p-6 rounded-lg mb-8">
          <h2 className="text-lg font-medium mb-4">Additional Info</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              name="build_year"
              value={formData.build_year}
              onChange={handleChange}
              placeholder="Build Year"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="map_url"
              value={formData.map_url}
              onChange={handleChange}
              placeholder="Map URL"
              className="border p-2 rounded"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Submit Property
        </button>
      </form>
    </div>
  );
};

export default AddNewProperty;
