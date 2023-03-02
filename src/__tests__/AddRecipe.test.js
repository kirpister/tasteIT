import { fireEvent, render, screen } from "@testing-library/react";
import AddRecipe from "../components/AddRecipe";

import axios from 'axios';
import { navigate } from 'react-router-dom';
import { submitHandler } from '../components/AddRecipe';


test("testing a button on AddRecipe", () => {

    render(<AddRecipe />);
  
    const button = screen.getByText("Submit");

    fireEvent.click(button);
 
    screen.getByText("Submit");


  });

  //___________

  const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
     ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
  }));

describe('submitHandler', () => {
  test('testing axios.post and navigating to the browse recipes page', async () => {
    const addRecipe = { name: 'Test Recipe', ingredients: ['Ingredient 1', 'Ingredient 2'], instructions: 'Test instructions' };
    const e = { preventDefault: jest.fn(), target: { reset: jest.fn() } };
    axios.post = jest.fn().mockResolvedValue({});

    await submitHandler(e);

    expect(e.preventDefault).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith('http://localhost:3001/recipes', addRecipe);
    expect(e.target.reset).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith('/browserecipes');
  });
});


  



