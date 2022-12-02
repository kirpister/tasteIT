import React from 'react';
import '../styles/addRecipe.css';

const AddRecipe = () => {
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

        <div className='row'>
        <div className='input1'>
        <label htmlFor="">Quantity</label>
        <input type="text" />
        </div>

        <div className='input2'>
        <label htmlFor="">Ingredient</label>
        <input type="text" />
        </div>
        </div>

        <button>Add more</button>

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