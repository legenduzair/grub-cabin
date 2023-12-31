import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/AboutUs/AboutUs'
import SpecialMenu from './components/SpecialMenu/SpecialMenu'
import Chef from './components/Chef/Chef'
import Intro from './components/Intro/Intro'
import Reviews from './components/Reviews/Reviews'
import Gallery from './components/Gallery/Gallery'
import FindUs from './components/FindUs/FindUs'
import Footer from './components/Footer/Footer'

import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Reviews />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  )
}

export default App