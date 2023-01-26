import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/addRecipe.css';

const AddRecipe = () => {

    const navigate = useNavigate();

    const [addInput, setAddInput] = useState([{ quantity: '', ingredient: '' }]);
    const [countryData, setCountryData] = useState([]);
    const [addRecipe, setAddRecipe] = useState({
        id: '',
        name: '',
        author: '',
        country: '',
        flag: '',
        description:'',
        image: '',
        ingredients: [],
        instructions: '',
    })
    
    useEffect(() => {
            
        axios.get('https://restcountries.com/v3.1/all')
            .then((res) => { 
                let countriesArr = [];
                res.data.map((a) => countriesArr.push(a.name.common));
                countriesArr.sort();
                setCountryData(countriesArr);
            });
    }, []);


    const addHandler = (e) => {
        e.preventDefault();
        setAddInput([...addInput,{ quantity: '', ingredient: '' } 
    ]);
    }

    const newIngredient = (e, index) => {
        let ingredList = [...addInput];
        ingredList[index][e.target.name] = e.target.value;
        setAddInput(ingredList);
        setAddRecipe({ ...addRecipe, ingredients: addInput })
    }

    const changeHandler = (e) => {
        setAddRecipe({ ...addRecipe, [e.target.name]: e.target.value })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:3001/recipes', addRecipe);
        alert('Succes!');
        e.target.reset();
        navigate('/browserecipes');
    };

    // Note to idiot self, you deserved all the suffering you got for naming the component and state with the same names. 

    return (

    
        <div className='wrapper'>
    
        <div className='form-cont'>
            <h3>Add your recipe here</h3>
        <form onSubmit={submitHandler}>

        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" onChange={changeHandler}/>
        </div>

        <div>
            <label htmlFor="author">Author</label>
            <input type="text" name="author" onChange={changeHandler}/>
        </div> 

        <div>
            <label htmlFor="country">Country of origin</label>
            <select name="country" defaultValue={"choice"} onChange={changeHandler}>
            <option value="choice" disabled={true}>Choose a country</option>
            {countryData.map((c) => {
            return ( <option value={c} key={c}>{c}</option>);
            })}</select>
        </div>

        <div>
            <label htmlFor="description">Description</label>
            <textarea type="text" name="description" onChange={changeHandler}></textarea>
        </div>

        <div>
            <label htmlFor="image">Image</label>
            <input type="text" name="image" onChange={changeHandler}/>
        </div>

        <label htmlFor="ingredients">Ingredients</label>

        {addInput.map((ingredient, index) => (
            <div key={index} className='row'>
            <div className='input1'>
            <label htmlFor="quantity">Quantity</label>
            <input type="text" name="quantity" value={ingredient.quantity} onChange={(e) => newIngredient(e, index)} />
            </div>
         
            <div className='input2'>
            <label htmlFor="ingredient">Ingredient</label>
            <input type="text" name="ingredient" value={ingredient.ingredient} onChange={(e) => newIngredient(e, index)} />
            </div>
                
            </div>))}  
         
        <button onClick={addHandler}>Add more</button>
         
        <div>
            <label htmlFor="instructions">Instructions</label>
            <textarea type="text" name="instructions" onChange={changeHandler}></textarea>
        </div> 

         <button type='submit'>Submit</button>   

        </form>
        </div>
        </div>

    
    );
};

export default AddRecipe;