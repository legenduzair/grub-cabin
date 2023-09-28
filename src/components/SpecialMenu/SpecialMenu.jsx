import React from 'react'

import MenuItem from '../MenuItem/MenuItem';
import data from '../../constants/data';
import './SpecialMenu.css';

const SpecialMenu = () => {
  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
        <div className="app__specialMenu-title">
            <h1 className='specialMenu-title'>Today's Special</h1>
        </div>

        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_burgers flex__center">
                <p className='app__specialMenu-menu_heading'>Burgers</p>
                <div className="app__specialMenu_menu_items">
                    {data.burgers.map((burger, index) => (
                        <MenuItem key={burger.title + index} title={burger.title} desc={burger.desc} price={burger.price}/>
                    ))}
                </div>
            </div>

            <section />

            <div className="app__specialMenu-menu_steaks flex__center">
                <p className='app__specialMenu-menu_heading'>Steaks</p>
                <div className="app__specialMenu_menu_items">
                    {data.steaks.map((steak, index) => (
                        <MenuItem key={steak.title + index} title={steak.title} desc={steak.desc} price={steak.price}/>
                    ))}
                </div>
            </div>
        </div>
        <div style={{ marginTop: 15 }}>
            <button type="button" className="custom__button">View More</button>
        </div>
    </div>
  )
}

export default SpecialMenu