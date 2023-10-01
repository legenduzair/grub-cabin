import React from 'react';

import images from '../../constants/images';
import SubHeading from '../Subheading/SubHeading';
import './Chef.css';

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.chef} alt="" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Chef's Word" />
            <h1 className="chef-title">
                What we believe in
            </h1>

            <div className="app__chef-content">
                <div className="app__chef-content_quote">
                    <p className="chef-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
                </div>
            </div>

            <div className="app__chef-sign">
                <p>Freddy Khan</p>
                <p className="chef-p">Chef & Founder</p>
                <img src={images.signature} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Chef