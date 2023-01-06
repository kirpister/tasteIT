import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

const Header = () => {

 return (
        <header>
            <NavLink to="/"><h2>taste<b>IT</b></h2></NavLink>
            <Nav />
        </header>
    );
};

export default Header;