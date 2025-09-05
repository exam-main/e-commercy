import React from 'react'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'
import Hero from './components/Hero'
import Recommended from './components/Recommended'
import WhyChooseUs from './components/WhyChooseUs'
import Category1 from './components/Category1'
import HeroSection from './components/HeroSection'
import RecentProperti from './components/RecentProperti'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { CgAttachment } from 'react-icons/cg'

function App() {
  return (
    <div>
      <Navbar/>
      <SearchBar/>
      <Hero/>
      <Recommended/>
      <WhyChooseUs/>
      <Category1/>
      <HeroSection/>
      <RecentProperti/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App