import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
//import { ... } from "@testing-library/react";
import "@testing-library/jest-dom";  // optional
//import userEvent from "@testing-library/user-event";
//import TestComponent from "path-to-test-component";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Price/i);
  expect(linkElement).toBeInTheDocument();
});
