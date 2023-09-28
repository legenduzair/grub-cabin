import React from 'react'

import SubHeading from '../Subheading/SubHeading'
import data from '../../constants/data';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
        <div className="app__specialMenu-title">
            <SubHeading title='Menu that fits your palette' />
            <h1 className='specialMenu-title'>Today's Special</h1>
        </div>

        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_burgers flex__center">
                <p className='app_specialMenu_menu_heading'>Burgers</p>
                <div className="app__specialMenu_menu_items">
                    {data.burgers.map((burger, index) => (
                        <p>{burger.title}</p>
                    ))}
                </div>
            </div>

            <div className="app__specialMenu-menu_steaks flex__center">
                <p className='app_specialMenu_menu_heading'>Steaks</p>
                <div className="app__specialMenu_menu_items">
                    {data.steaks.map((steak, index) => (
                        <p>{steak.title}</p>
                    ))}
                </div>
            </div>

            <div style={{ marginTop: 15 }}>
                <button type="button" className="custom__button">View More</button>
            </div>
        </div>
    </div>
  )
}

export default SpecialMenu