import React from 'react'
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { Newsletter } from '../Newsletter/Newsletter';

import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer' id='login'>
        <Newsletter />

        <div className="app__footer-links">
            <div className="app__footer-links_contact">
                <h1 className="app__footer-title">Contact Us</h1>
                <p className="contact-p">17 Essingdon Street, Bolton, BL3 6TS, England, UK</p>
                <p className="contact-p">uzairoomer@live.com</p>
            </div>
            <div className="app__footer-links_logo">
                <h1 className='app__footer-title'>The Grub Cabin</h1>
                <p className="grubcabin-p">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                <div className="app__footer-links_icons">
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>
            <div className="app__footer-links_work">
                <h1 className="app__footer-title">Opening Hours</h1>
                <p className="work-p">Monday - Friday:</p>
                <p className="work-p">13:00pm - 21:00pm</p>
                <p className="work-p">Saturday:</p>
                <p className="work-p">15:00pm - 1:00am</p>
                <p className="work-p">Sunday:</p>
                <p className="work-p">15:00pm - 11:00pm</p>
            </div>
        </div>
        <div className="footer__copyright">
            <p className="copyright-p">2023 The Grub Cabin. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer