import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../styles/Recipe.css';

const Recipe = () => {

const [data, setData] = useState([]);
const [flag, setFlag] = useState();

const navigate = useNavigate();
let params = useParams();


useEffect(() => {
   
    axios.get(`http://localhost:3001/recipes/${params.singlerecipe}`)
    .then((res) => { setData(res.data);
      
        axios.get("https://restcountries.com/v3.1/name/" + res.data.country)
        .then((res) => { setFlag(res.data[0].flags.svg);
    })
  })
},[params]);

return (
        <div className='recipe-cont'>
            <div className='recipe-info'>
            <h2>{data.name}</h2>
            <img src={data.image} alt="food-img" className="food-img" />

            <h4>Ingredients:</h4>
         
         <table className="ingred-table">
       <tbody>
         {data.ingredients?.map((ingredient) => {
             return (
               <tr key={ingredient.ingredient}>
                 <td>
                 {ingredient.quantity}  -  {ingredient.ingredient}
                 </td>
               </tr> );
         }
           )}
       </tbody>
     </table>
            </div>

            <div className='recipe-box'>

              <img src={flag} alt="flag" />

              <h4>Author:</h4> <p>{data.author}</p>
              <h4>Country of Origin:</h4> <p>{data.country}</p>
              <h4>Description:</h4> <p>{data.description}</p>
            
            <div className='instuction-cont'>
              <h4>Instructions:</h4>
              <p>{data.instructions}</p>
            </div>
              <div><button onClick={() => navigate(-1)}>Go Back</button></div>
            </div>
            
        </div>
    );
};  

export default Recipe;