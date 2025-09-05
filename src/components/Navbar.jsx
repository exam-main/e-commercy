import React from 'react';

export default function Navbar() {
    return (
        <div className="bg-[#0D263B] text-white">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

                <div className="flex items-center gap-2">
                    <img src="public/images/download.png" alt="logo" className="w-6 h-6" />
                    <span className="font-bold text-lg">Houzing</span>
                </div>


                <div className="hidden md:flex items-center gap-8 text-sm">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">Properties</a>
                    <a href="#" className="hover:underline">Contacts</a>
                </div>


                <button className="border border-white px-4 py-1 rounded hover:bg-white hover:text-[#0D263B] transition">
                    Login
                </button>
            </div>
        </div>
    );
}
