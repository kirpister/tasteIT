import React, { useEffect, useState } from 'react';
import Card from './Card';

import '../styles/Card.css';
import axios from 'axios';

const BrowseRecipes = () => {

    const [data, setData] = useState({ search: '' });
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/recipes')
        .then((res) => {
            setRecipes(res.data);
            console.log(res.data)
        });
    },[]);

    const inputHandler = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value })
    };

    const searchedRecipes = recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(data.search.toLowerCase());
    });

    return (
        <div className='browse-page'>
        <h3 className='browse-h3'>Take a look at our recipes</h3>
        <div className='search-cont'>
            <input type="text" className='input-search' name='search' placeholder='Search for recipe' onChange={inputHandler} />
        </div>
        <div className='cards-cont'>
            
            
            {searchedRecipes.map((recipe) => {
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