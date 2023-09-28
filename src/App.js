import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './components/AboutUs/AboutUs'
import './App.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
    </>
  )
}

export default App