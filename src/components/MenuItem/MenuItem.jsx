import React from 'react'

import './MenuItem.css'

const MenuItem = ({ title, desc, price}) => {
  return (
    <div className='app__menuItem'>
        <div className="app__menuItem-head">
            <div className="app__menuItem-name">
                <p style={{ color: '#F0A202'} } className='menuItem-p'>{title}</p>
            </div>

            <div className="app__menuItem-desc">
                <p className='menuItem-p'>{desc}</p>
            </div>

            <div className="app__menuItem-price">
                <p className='menuItem-p'>{price}</p>
            </div>
        </div>
    </div>
  )
}

export default MenuItem