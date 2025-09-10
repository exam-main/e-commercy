import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate(); 

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

 
  useEffect(() => {
    setDropdownOpen(false);
  }, [user]);

  
  const handleLogout = async () => {
    try {
      await logout();  
      navigate('/');   
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="bg-[#0D263B] text-white z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

       
        <div className="flex items-center gap-2">
          <img src="/images/download.png" alt="logo" className="w-6 h-6" />
          <span className="font-bold text-lg">Houzing</span>
        </div>

        
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/properties" className="hover:underline">Properties</Link>
          <Link to="/contact" className="hover:underline">Contacts</Link>
        </div>

        
        {user ? (
          <div ref={menuRef} className="relative">
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
              className="w-8 h-8 rounded-full cursor-pointer"
              onClick={() => setDropdownOpen(prev => !prev)}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-md z-50">
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">My profile</Link>
                <Link to="/my-properties" className="block px-4 py-2 hover:bg-gray-100">My Properties</Link>
                <Link to="/favourites" className="block px-4 py-2 hover:bg-gray-100">Favourites</Link>
                <button
                  onClick={handleLogout}  
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="border border-white px-4 py-1 rounded hover:bg-white hover:text-[#0D263B] transition"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
