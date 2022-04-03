import { render, screen } from '@testing-library/react';
import React from "react";
import App from '../App'
//import { ... } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
//import userEvent from "@testing-library/user-event";
//import TestComponent from "path-to-test-component";

test('App and header loads at all', () => {
  render(<App />);
  const someText = screen.getByText(/Fake Shopping Site/i);
  expect(someText).toBeInTheDocument();
});



