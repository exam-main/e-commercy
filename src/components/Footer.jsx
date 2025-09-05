import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0A2640] text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
    
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <ul className="text-sm space-y-4">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 384 512"><path d="M168 0C75.1 0 0 75.1 0 168c0 87.3 145.7 284.1 152.6 292.8a24 24 0 0 0 38.8 0C238.3 452.1 384 255.3 384 168 384 75.1 308.9 0 216 0h-48zM192 232a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"/></svg>
              <span>329 Queensberry Street, North Melbourne VIC 3051, Australia.</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512"><path d="M511.1 387.4c-.8-1.6-18.5-39.7-70.4-70.7-10.1-5.8-23.3-10.9-37.5-15.1-5.7-1.7-11.5.5-14.9 5.4l-43.2 64.3c-39.7-20.9-72.1-53.3-93-93l64.3-43.2c4.9-3.3 7.1-9.2 5.4-14.9-4.2-14.2-9.2-27.4-15.1-37.5C164.3 19.4 126.2 1.7 124.6.9c-6-3.1-13.3-2.1-18.2 2.3L60.1 47.4c-7.6 7.6-13.2 17.1-15.9 27.3-14.7 54.7-1.3 138.4 98.4 238.1S382.7 464.5 437.4 449.8c10.2-2.7 19.7-8.3 27.3-15.9l44.2-45.3c4.4-4.9 5.4-12.2 2.3-18.2z"/></svg>
              <span>123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512"><path d="M502.3 190.8 327.4 338.8c-15.1 13-35.8 20.2-56.3 20.2s-41.2-7.1-56.3-20.2L9.7 190.8c-6.1-5.3-9.7-12.9-9.7-21V112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v57.8c0 8.1-3.6 15.7-9.7 21z"/></svg>
              <span>support@houzing.com</span>
            </li>
          </ul>

          
          <div className="flex items-center gap-4 mt-6">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((platform) => (
              <div key={platform} className="w-8 h-8 bg-white text-[#0A2640] flex items-center justify-center rounded-full hover:bg-gray-200 transition">
                <span className="text-sm capitalize">{platform[0]}</span>
              </div>
            ))}
          </div>
        </div>

        
        <div>
          <h3 className="font-semibold mb-4">Discover</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Chicago</li>
            <li>Los Angeles</li>
            <li>Miami</li>
            <li>New York</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-4">Lists by Category</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>Apartments</li>
            <li>Condos</li>
            <li>Houses</li>
            <li>Offices</li>
            <li>Retail</li>
            <li>Villas</li>
          </ul>
        </div>

      
        <div>
          <h3 className="font-semibold mb-4">Lists by Category</h3>
          <ul className="text-sm space-y-2 text-gray-300">
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Support Center</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

     
      <div className="border-t border-gray-700 mt-12 py-6 px-4 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-white text-sm">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeWidth="2" d="M12 2C8 2 4 5 4 9c0 6 8 13 8 13s8-7 8-13c0-4-4-7-8-7z"/><circle cx="12" cy="9" r="2"/></svg>
          <span>Houzing</span>
        </div>
        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          Copyright © 2021 CreativeLayers. All Right Reserved.
        </div>
        <button className="w-8 h-8 bg-blue-600 text-white rounded shadow ml-0 md:ml-4 mt-4 md:mt-0">
          ↑
        </button>
      </div>
    </footer>
  );
};

export default Footer;
