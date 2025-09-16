import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';


const fixImageUrl = (url) => {
  if (!url) return 'https://i.pravatar.cc/400';
  if (url.startsWith('http://')) return url.replace('http://', 'https://');
  return url;
};

export default function MyProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/accommodations')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error('Error loading properties:', err));
  }, []);

 
  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this listing?');
    if (!confirmed) return;

    fetch(`http://localhost:3000/accommodations/${id}`, {
      method: 'DELETE',
    })
      .then(res => {
        if (res.ok) {
          setProperties(prev => prev.filter(item => item.id !== id));
        } else {
          alert('Failed to delete the listing');
        }
      })
      .catch(() => alert('Failed to delete the listing'));
  };

  
  const handleUpdate = (id) => {
    alert(`Update listing with ID: ${id}`);
    
  };

  return (
    <div className="flex flex-col min-h-screen w-full bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">My Properties</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow rounded-lg border border-gray-200">
            <thead>
              <tr className="bg-[#FAFAFA] border-b border-gray-300">
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Listing Title</th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Date Published</th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Status</th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">View</th>
                <th className="py-3 px-6 text-left text-sm font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property) => (
                <tr key={property.id} className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      {/* Image */}
                      <div className="w-16 h-16 rounded-md relative overflow-hidden bg-gray-100">
                        <img
                          src={fixImageUrl(property.image)}
                          alt={property.title}
                          className="w-full h-full object-cover"
                        />
                        {property.featured && (
                          <span className="absolute top-1 left-1 bg-blue-600 text-white text-[10px] font-semibold px-1 rounded">
                            FEATURED
                          </span>
                        )}
                      </div>

                      {/* Title and Info */}
                      <div>
                        <div className="font-semibold text-sm flex items-center gap-2">
                          {property.title}
                          {property.forSale && (
                            <span className="bg-black text-white text-xs px-2 py-0.5 rounded">FOR SALE</span>
                          )}
                        </div>
                        <div className="text-xs text-gray-500">{property.address}</div>
                        <div className="text-xs line-through text-gray-400 mt-1">${property.oldPrice}/mo</div>
                        <div className="font-bold text-sm">${property.price}/mo</div>
                      </div>
                    </div>
                  </td>

                  {/* Date */}
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {property.datePublished || 'N/A'}
                  </td>

                  {/* Status */}
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {property.status || 'Pending'}
                  </td>

                  {/* Views */}
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {property.views || 0}
                  </td>

                  {/* Action buttons */}
                  <td className="py-4 px-6 flex gap-4 text-lg">
                    <button
                      className="text-gray-600 hover:text-blue-600 transition"
                      onClick={() => handleUpdate(property.id)}
                      aria-label="Update listing"
                    >
                      🖋️
                    </button>
                    <button
                      className="text-gray-600 hover:text-red-600 transition"
                      onClick={() => handleDelete(property.id)}
                      aria-label="Delete listing"
                    >
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}

              {properties.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No properties found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
