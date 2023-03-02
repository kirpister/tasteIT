import React from "react";
import ReactDOM from "react-dom";
import '../matchMedia';
import App from '../App';

import renderer from 'react-test-renderer';


test("renders the correct content", () => {

const root = document.createElement("div");
ReactDOM.render(<App />, root);

// testing the h1 heading
expect(root.querySelector("h1").textContent).toBe("tasteIT");

// testing the button text on home page
expect(root.querySelector("button").textContent).toBe("Browse Recipes");

});

describe('Jest snapshot testing suite', () => {
  test('Matches DOM Snapshot for App component', () => {
      const domTree = renderer.create(<App />).toJSON();

      expect(domTree).toMatchSnapshot();
  });
});












