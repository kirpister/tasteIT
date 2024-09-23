import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

import moon from '../assets/moon.png';
import sun from '../assets/sun.png';

import Nav from './Nav';

const Header = ({switchTheme}) => {

 return (
        <header>
            <NavLink to="/"><h2>&#x1f364;taste<b>IT</b></h2></NavLink>
            {/* <button onClick={switchTheme}>Switch Theme</button>  */}
            <div className='mode-toggle'>
            <input type="checkbox" className="checkbox" id="checkbox" onChange={switchTheme} />
            <label htmlFor="checkbox" className="checkbox-label">
                <img className='sun' src={sun} alt="sun" />
                <img className='moon' src={moon} alt="moon" />
                <span className="ball"></span>
            </label>
    
            </div>
            <Nav />
        </header>
    );
};

export default Header;