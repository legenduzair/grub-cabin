import React from 'react';
import './Navbar.css'
import { RxHamburgerMenu } from 'react-icons/rx';

const Navbar = () => {
  return (
    <nav className='app__navbar'>
        <div className="app__navbar-title">
            The Grub Cabin
        </div>
        <ul className='app__navbar-links'>
            <li className='navbar-links'><a href="#home">Home</a></li>
            <li className='navbar-links'><a href="#about">About</a></li>
            <li className='navbar-links'><a href="#home">Menu</a></li>
            <li className='navbar-links'><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-login">
            <a href="#login">Log In / Register</a>
            <div />
            <a href="/">Book a Table</a>
        </div>
        <div className="app__navbar-smallscreen">
            <RxHamburgerMenu color='white' fontSize={27}/>
            <ul className='app__navbar-smallscreen-links'>
            <li className='navbar-links'><a href="#home">Home</a></li>
            <li className='navbar-links'><a href="#about">About</a></li>
            <li className='navbar-links'><a href="#home">Menu</a></li>
            <li className='navbar-links'><a href="#contact">Contact</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar