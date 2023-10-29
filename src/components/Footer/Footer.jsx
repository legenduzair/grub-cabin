import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Newsletter } from '../Newsletter/Newsletter';

import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
        <Newsletter />
    </div>
  )
}

export default Footer