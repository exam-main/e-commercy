import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className="bg-[#0D263B] text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <img src="/images/download.png" alt="logo" className="w-6 h-6" />
                    <span className="font-bold text-lg">Houzing</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/properties" className="hover:underline">Properties</Link>
                    <Link to="/contacts" className="hover:underline">Contacts</Link>
                </div>

                <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-[#0D263B] transition">
                    Login
                </button>
            </div>
        </div>
    );
}
