import React from 'react'
import SubHeading from '../Subheading/SubHeading';
import images from '../../constants/images';
import './Header.css';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='home'>
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour" />
            <h1 className="app__header-h1">The Key to Fine Dining</h1>
            <p className="header__p" style={{ margin: '2rem 0' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus</p>
            <button type='button' className='custom__button'>Explore Menu</button>
        </div>
        <div className='app__wrapper_img' style={{color : 'white'}}>
            <img src={images.header} alt="header-img" />
        </div>
    </div>
  )
}

export default Header