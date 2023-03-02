import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';

import './App.css';
import AddRecipe from './components/AddRecipe';
import BrowseRecipes from './components/BrowseRecipes';
import Recipe from './components/Recipe';
import Home from './components/Home';
import Layout from './components/Layout';
import Header from './components/Header';
import ToTop from './components/ToTop';

const App = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)')
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (

    
    <BrowserRouter>
      <ToTop />
      <div className='App'>
        <Header switchTheme={switchTheme}/>
        <Routes>
         
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='browserecipes' element={<BrowseRecipes />} />
            <Route path='browserecipes/:singlerecipe' element={<Recipe />}  />
            <Route path='add' element={<AddRecipe />} />
          </Route>
        </Routes>

      </div>
      
      </BrowserRouter>
      
  );
}

export default App;
