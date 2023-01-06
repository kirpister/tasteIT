import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

const Header = ({switchTheme}) => {

 return (
        <header>
            <NavLink to="/"><h2>taste<b>IT</b></h2></NavLink>
            <button onClick={switchTheme}>Switch Theme</button> 
            <Nav />
        </header>
    );
};

export default Header;