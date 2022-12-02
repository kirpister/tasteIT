import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import AddRecipe from './components/AddRecipe';
import BrowseRecipes from './components/BrowseRecipes';
import Recipe from './components/Recipe';
import Home from './components/Home';
import Layout from './components/Layout';

const App = () => {
  return (

    <BrowserRouter>

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='browserecipes' element={<BrowseRecipes />} />
            <Route  path='browserecipies/:recipe' element={<Recipe />}  />
            <Route path='add' element={<AddRecipe />} />
          </Route>
        </Routes>

      </BrowserRouter>

  );
}

export default App;
