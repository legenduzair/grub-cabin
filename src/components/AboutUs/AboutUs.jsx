import React from 'react';
import './AboutUs.css';
import images from '../../constants/images';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className='aboutus-title'>About Us</h1>
          <p className='aboutus-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
          <button type="button" className="custom__button">Know Moree</button>
        </div>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_history">
          <h1 className="aboutus-title">Our History</h1>
          <p className="aboutus-p">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
          <button type="button" className="custom__button">Know More</button>
        </div>
      </div>
        
    </div>
  )
}

export default AboutUs