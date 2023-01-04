import React, { useEffect, useState } from 'react';
import Card from './Card';

import '../styles/Card.css';
import axios from 'axios';

const BrowseRecipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/recipes')
        .then((res) => {
            setRecipes(res.data);
            console.log(res.data)
        });
    },[]);


    return (
        <div className='browse-page'>
        <h3 className='browse-h3'>Take a look at our recipes</h3>
        <div className='cards-cont'>
            
            
            {recipes.map((recipe) => {
                return (
            <Card   
            name={recipe.name}
            key={recipe.id}
            image={recipe.image}
            id={recipe.id}
            flag={recipe.flag}
            country={recipe.country}
            ingredients={recipe.ingredients}
            
            />
            );
        })} 
           
        </div>
        </div>
    );
};

export default BrowseRecipes;