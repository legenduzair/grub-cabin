import React from 'react'
import SubHeading from '../Subheading/SubHeading';
import data from '../../constants/data';
import images from '../../constants/images';

import './FindUs.css'

const FindUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id='contact'>
        <div className="app__wrapper_info">
            <SubHeading title='Contact' />
            <h1 className="findus-title">Find Us</h1>
            <div className="app__wrapper-content">
                <p className='findus-p'>120 Ash Lawns, Bolton, BL1 4PD, England</p>
                <p className='opening-hours'>Opening Hours</p>
                <p className='findus-p'>Mon - Fri: 5pm - 12am</p>
                <p className='findus-p'>Sat - Sun: 3pm - 2am</p>
            </div>
            <button className='custom__button' style={{marginTop: '2rem'}}>Visit Us</button>
        </div>

        <div className="app__wrapper_img">
            <img src={images.milkshake} alt="" />
        </div>
    </div>
  )
}

export default FindUs