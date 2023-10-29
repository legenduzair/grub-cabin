import React from 'react'
import Subheading from '../Subheading/SubHeading'

import './Newsletter.css'

export const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className="app__newsletter-heading">
        <Subheading title="Newsletter" />
        <h1 className="newsletter-title">Subscribe To Our Newsletter</h1>
        <p className="newsletter-p">And never miss the latest updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input type="email" placeholder="Enter your email address" />
        <button type="button" className="custom__button">Subscribe</button>
      </div>
    </div>
  )
}
