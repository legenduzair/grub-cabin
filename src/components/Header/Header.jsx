import React from 'react'
import SubHeading from '../Subheading/SubHeading';
import './Header.css';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id='home'>
        <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour" />
            <h1 className="app__header-h1">The Key to Fine Dining</h1>
        </div>

        <div className='app__wrapper_img' style={{color : 'white'}}>
            Image
        </div>
    </div>
  )
}

export default Header