import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../styles/addRecipe.css';

const AddRecipe = () => {

    const [addInput, setAddInput] = useState([{ id: 1, quantity: '', ingredient: '' }]);
    const [isLoading, setIsLoading] = useState(false);
    const [countryData, setCountryData] = useState([]);
    const [addRecipe, setAddRecipe] = useState({
        name: '',
        author: '',
        country: '',
        flag: '',
        description:'',
        ingredients: [],
        instructions: '',
    })
    

    const addHandler = (e) => {
        e.preventDefault();
        setAddInput([...addInput,{ id: addInput.length + 1, quantity: '', ingredient: '' } 
    ]);
    }

    const newIngredient = (e, index) => {
        let ingredList = [...addInput];
        ingredList[index][e.target.name] = e.target.value;
        setAddRecipe({ ...addRecipe, addInput: ingredList })
    }

    const changeHandler = (e) => {
        setAddRecipe({ ...AddRecipe, [e.target.name]: e.target.value });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // setAddRecipe({ ...AddRecipe, ingredients: addInput });
        axios.post('http://localhost:3001/recipes', addRecipe);
        // .then((res) => console.log(res));
    };

    useEffect(() => {
        setIsLoading(true);
    
        axios.get('https://restcountries.com/v3.1/all')
            .then((res) => { 
                let countriesArr = [];
                res.data.map((a) => countriesArr.push(a.name.common));
                countriesArr.sort();
                setCountryData(countriesArr);
            });
    }, []);



    return (

    
        <div className='wrapper'>
    
        <div className='form-cont'>
            <h3>Add your recipe here</h3>
        <form action="">

        <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={addRecipe.name} onChange={(e) => changeHandler(e)}/>
        </div>

        <div>
            <label htmlFor="author">Author</label>
            <input type="text" name="author" id="author" value={addRecipe.author}/>
        </div>

        <div>
            <label htmlFor="country">Country of origin</label>
            <select name="country" id="country" value={addRecipe.country.value} onChange={(e) => changeHandler(e)}>
            <option value="" disabled>Choose a country</option>
            {countryData.map((a) => {
            return ( <option value={a} key={a}>{a}</option>);
            })}</select>
        </div>

        <div>
            <label htmlFor="description">Description</label>
            <textarea name="description" id="description" value={addRecipe.description} onChange={(e) => changeHandler(e)}></textarea>
        </div>

        <div>
            <label htmlFor="image">Image</label>
            <input type="text" name="image" id="image" value={addRecipe.image} onChange={(e) => changeHandler(e)}/>
        </div>

        <label htmlFor="ingredients">Ingredients</label>

        {addInput.map((ingredient, index) => (
            <div key={index} className='row'>
            <div className='input1'>
            <label htmlFor="">Quantity</label>
            <input type="text" name="quantity" id="quantity" value={ingredient.quantity} onChange={(e) => newIngredient(e, index)} />
            </div>
         
            <div className='input2'>
            <label htmlFor="">Ingredient</label>
            <input type="text" name="ingredient" id="ingredient" value={ingredient.name} onChange={(e) => newIngredient(e, index)} />
            </div>
                
            </div>))}
         
        <button onClick={addHandler}>Add more</button>
         
        <div>
            <label htmlFor="">Instructions</label>
            <textarea name="instructions" id="instructions" value={addRecipe.instructions} onChange={(e) => changeHandler(e)}></textarea>
        </div>

         <button onClick={submitHandler}>Submit</button>   

        </form>
        </div>
        </div>

    
    );
};

export default AddRecipe;