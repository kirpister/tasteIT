import axios from 'axios';

// testing the api call to get recipes

jest.mock('axios');

describe('getRecipes api call', () => {
  test('it should fetch recipes from the API', async () => {
    const mockRecipes = [
      { id: 1, name: 'Recipe 1', ingredients: ['Ingredient 1', 'Ingredient 2'], instructions: 'instructions 1' },
      { id: 2, name: 'Recipe 2', ingredients: ['Ingredient 3', 'Ingredient 4'], instructions: 'instructions 2' },
    ];

    axios.get.mockResolvedValue({ data: mockRecipes });

    const result = await axios.get('http://localhost:3001/recipes');

    expect(result.data).toEqual(mockRecipes);
  });
});



