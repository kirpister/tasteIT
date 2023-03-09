import { fireEvent, render, screen } from "@testing-library/react";
import AddRecipe from "../components/AddRecipe";


test("testing a button on AddRecipe", () => {

    render(<AddRecipe />);
  
    const button = screen.getByText("Submit");

    fireEvent.click(button);
 
    screen.getByText("Submit");


  });

  // This fixes the useNavigate error

  const mockedUsedNavigate = jest.fn();

  jest.mock('react-router-dom', () => ({
     ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUsedNavigate,
  }));


  



