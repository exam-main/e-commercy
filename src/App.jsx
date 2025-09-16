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


import ContactPage from './pages/Contact';
import Login from './components/Login';
import Register from './components/Register';

import MyProperties from './pages/MyProperties';

import { AuthProvider } from './context/AuthContext'; 
import { FavouriteProvider } from './context/FavouriteContext'; 
import Properties from './pages/Property';
import Favourite from './pages/Favourites';
import Profile from './pages/Profile';
import AddNewProperty from './pages/AddNewProperty';
import PropertyDetails from './pages/PropertyDetails';
import Buy from './pages/Request';

function Home() {
  return (
    <>
      <SearchBar />
      <Hero />
      <Recommended />
      <WhyChooseUs />
      <Category1 />
      <HeroSection />
      <RecentProperti />
      <Testimonials />
      
    </>
  )
}

function App() {
  return (
    <AuthProvider>
      <FavouriteProvider>   
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<Properties/>} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/favourites" element={<Favourite />} /> 
            <Route path="/my-properties" element={<MyProperties />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-new-property" element={<AddNewProperty />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/request" element={<Buy />} />
          </Routes>
          <Footer />
        </Router>
      </FavouriteProvider>
    </AuthProvider>
  );
}

export default App;
