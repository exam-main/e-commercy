import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Hero from './components/Hero';
import Recommended from './components/Recommended';
import WhyChooseUs from './components/WhyChooseUs';
import Category1 from './components/Category1';
import HeroSection from './components/HeroSection';
import RecentProperti from './components/RecentProperti';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';


import Properties from './pages/property';  
import Contact from './pages/Caontact';


function Home() {
  return (
    <>
      <SearchBar/>
      <Hero/>
      <Recommended/>
      <WhyChooseUs/>
      <Category1/>
      <HeroSection/>
      <RecentProperti/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
    </Router>
  );
}


export default App;
