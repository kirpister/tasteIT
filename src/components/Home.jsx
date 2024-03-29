import React from 'react';
import heroVid from '../assets/video.mp4';
import '../styles/Home.css';

import { Link } from 'react-router-dom';


const Home = () => {
   
    return (
        <main>
            <video className='video' autoPlay loop muted>
                <source src={heroVid} type='video/mp4' />
            </video>

            <div className='intro-container'>
                <h1>tasteIT</h1>
                <h3>Travel the world from your kitchen!</h3>
                <Link to="/browserecipes"><button>Browse Recipes</button></Link>
            
            </div>

            <div className='main-container'>

                <div className='home-card'>
                <h4>Browse Recipes</h4>
                <p>Need some inspiration? Browse here for recipes from around the world.</p>
                <Link to="/browserecipes"><small>All Recipes</small></Link>
                </div>

                <div className='home-card'>
                <h4>Add Recipes</h4>
                <p>Wanna add your local favorite into our collection?</p>
                <Link to="/add"><small>Add Recipes</small></Link>
                </div>
                
                <div className='home-card'>
                <h4>More about our projects</h4>
                <p>If you're interested in knowing more about our program visit BCH homepage.</p>
                <a href="http://bc.fi" target="_blank" rel="noreferrer"><small>Business College Helsinki</small></a>    
                </div>

                </div>
        </main>
    );
};

export default Home;