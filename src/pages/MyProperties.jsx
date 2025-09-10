import React from 'react';
import Footer from '../components/Footer';

export default function MyProperties() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto p-8 w-full">
        <h1 className="text-2xl font-bold mb-6">My properties</h1>
        
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
              {[1, 2, 3].map((item) => (
                <tr key={item} className="border-b border-gray-200 last:border-none hover:bg-gray-50 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gray-300 rounded-md relative">
                        <span className="absolute top-1 left-1 bg-blue-600 text-white text-[10px] font-semibold px-1 rounded">FEATURED</span>
                      </div>
                      <div>
                        <div className="font-semibold text-sm flex items-center gap-2">
                          New Apartment Nice View
                          <span className="bg-black text-white text-xs px-2 py-0.5 rounded">FOR SALE</span>
                        </div>
                        <div className="text-xs text-gray-500">Quincy St, Brooklyn, NY, USA</div>
                        <div className="text-xs line-through text-gray-400 mt-1">$2,800/mo</div>
                        <div className="font-bold text-sm">$7,500/mo</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">30 December 2022</td>
                  <td className="py-4 px-6 text-sm text-gray-600">Pending</td>
                  <td className="py-4 px-6 text-sm text-gray-600">5933</td>
                  <td className="py-4 px-6 flex gap-4 text-lg">
                    <button className="text-gray-600 hover:text-blue-600 transition">🖋️</button>
                    <button className="text-gray-600 hover:text-red-600 transition">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
