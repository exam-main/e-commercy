import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Contact() {
    
  return (
    <div className="font-sans p-[50px]">
        <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            <h1 className="text-2xl font-bold text-[#0D47A1]">
              <span className="text-black"></span>
              <sup className="text-blue-500">•</sup>
            </h1>
            <nav className="hidden md:flex space-x-8 font-medium">
              <Link to="/" className="hover:text-blue-600">
                Asosiy
              </Link>
              <Link to="/kurslar" className="hover:text-blue-600">
                Kurslar
              </Link>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 shadow hover:bg-gray-200">
                ⚙️
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-md">
                Examify
              </button>
              <Link to="/kirish" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Kirish
              </Link>
  
            </div>
          </div>
        </header>
      <section className="px-6 md:px-16 py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Savollaringiz bo’lsa murojaat qiling
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">📞</div>
            <h3 className="font-semibold">Telefon</h3>
            <p className="text-gray-600">+998 (97) 866 50 50</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold">Elektron Pochta</h3>
            <p className="text-gray-600">itliveguliston2023@gmail.com</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 flex flex-col items-center text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold">Manzil</h3>
            <p className="text-gray-600">
              Sirdaryo vil, Guliston sh, 1-mavze <br /> IT LIVE ACADEMY
            </p>
          </div>
        </div>

        <div className="bg-white shadow rounded-xl p-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
            Murojaatlarni shu yerdan jo’nating!
          </h2>

          <form className="space-y-5 max-w-2xl mx-auto">
            <div>
              <label className="block text-gray-700 mb-2">
                To‘liq ismingizni kiriting
              </label>
              <div className="flex items-center border rounded-lg px-3">
                <span className="text-gray-400 mr-2">👤</span>
                <input
                  type="text"
                  placeholder="F.I.Sh"
                  className="w-full p-2 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Telefon</label>
              <div className="flex items-center border rounded-lg px-3">
                <span className="text-gray-400 mr-2">📱</span>
                <input
                  type="tel"
                  placeholder="+998"
                  className="w-full p-2 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Xabar</label>
              <textarea
                placeholder="Matn"
                className="w-full border rounded-lg p-3 outline-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg"
            >
              Yuborish
            </button>
          </form>
        </div>
      </div>
      </section>
        <section className="flex flex-col items-center justify-center py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="flex items-center space-x-1 mb-6">
              <span className="text-3xl font-bold text-blue-600">iT</span>
              <span className="text-3xl font-bold">Live</span>
              <span className="text-blue-600 text-2xl">·</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Biz bilan muvaffaqiyatga erishing
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Barcha kurslarimiz tajribali mentorlar tomonidan tayyorlangan
            </p>

            <div className="flex space-x-4 mb-16">
              <button className="border border-black text-black hover:bg-gray-100 px-6 py-2 rounded-xl">
                Intro video
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl shadow">
                Bog'lanish
              </button>
            </div>

            <footer className="w-full border-t border-gray-300 flex justify-between text-sm text-gray-600 px-4 py-4">
              <span>© ITLIVE 2024. Barcha huquqlar himoyalangan</span>
              <a href="#" className="hover:underline">Xavfsizlik</a>
            </footer>
        </section>
    </div>
  )
}
