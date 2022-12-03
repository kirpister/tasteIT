import React from 'react';
import '../styles/Card.css';
import sampleimg from '../assets/sushi.jpg'

const Card = () => {
    return (

        

        <div className='recipe-card'>
          <img className='recipe-img' src={sampleimg}></img>
          <h4>Food!</h4>
          <button>See more</button>

        </div>
    );
};

export default Card;