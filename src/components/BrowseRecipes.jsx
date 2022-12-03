import React from 'react';
import Card from './Card';

import '../styles/Card.css';

const BrowseRecipes = () => {
    return (
        <div className='browse-page'>
        <h3 className='browse-h3'>Take a look at our recipes</h3>
        <div className='cards-cont'>
            
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </div>
    );
};

export default BrowseRecipes;