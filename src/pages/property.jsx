import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import RecentProperti from '../components/Properties'
import Footer from '../components/Footer'

function property() {
  return (
    <div>
        <SearchBar/>
        <RecentProperti/>
        <Footer/>
    </div>
  )
}

export default property