import React, { useState } from 'react';
import '../styles/addRecipe.css';

const AddRecipe = () => {

    const [addInput, setAddInput] = useState([{ id: 1, quantity: '', ingredient: '' }]);

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

    return (

    
        <div className='wrapper'>
    
        <div className='form-cont'>
        <h3>Add your recipe here</h3>
        <form action="">

        <div>
        <label htmlFor="">Name</label>
        <input type="text" />
        </div>

        <div>
        <label htmlFor="">Author</label>
        <input type="text" />
        </div>

        <div>
        <label htmlFor="">Country of origin:</label>
        <select name="" id=""></select>
        </div>

        <div>
        <label htmlFor="">Description</label>
        <textarea></textarea>
        </div>

        <div>
        <label htmlFor="">Image</label>
        <input type="text" />
        </div>

        <label htmlFor="">Ingredients</label>

        {addInput.map((input, index) => (
                 <div key={index} className='row'>
                 <div className='input1'>
                 <label htmlFor="">Quantity</label>
                 <input type="text" name="quantity" id="quantity" onChange={(e) => newIngredient(e, index)} />
                 </div>
         
                 <div className='input2'>
                 <label htmlFor="">Ingredient</label>
                 <input type="text" name="ingredient" id="ingredient" onChange={(e) => newIngredient(e, index)} />
                 </div>
                
                 
                 </div>
                 ))}
         
                <button onClick={addHandler}>Add more</button>
         

        {/* <div className='row'>
        <div className='input1'>
        <label htmlFor="">Quantity</label>
        <input type="text" name="quantity" id="quantity" />
        </div>

        <div className='input2'>
        <label htmlFor="">Ingredient</label>
        <input type="text" name="ingredient" id="ingredient" />
        </div>
        </div>

        <button>Add more</button>

        <div> */}
        <div>
        <label htmlFor="">Instructions</label>
        <textarea></textarea>
        </div>

        </form>
        </div>
        </div>

    
    );
};

export default AddRecipe;