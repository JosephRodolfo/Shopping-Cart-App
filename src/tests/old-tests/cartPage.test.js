import React from "react";
import CartPage from "../components/CartPage";
import { render, screen, within } from "@testing-library/react";

describe("cart page", () => {
  it("cart page renders correct number of items", () => {
    let sampleCart = [
      { name: "Bike", quantity: 500, price: 100 },
      { name: "Pedal", quantity: 2, price: 100 },
      { name: "Helmet", quantity: 1, price: 100 },
    ];
    render(<CartPage cartItems={sampleCart} />);

    const cartItemCards = screen.getAllByText(/Quantity/i);

    expect(cartItemCards.length).toBe(3);
  });

  it("cart page renders no items if 0", () => {
    let sampleCart = [];
    render(<CartPage cartItems={sampleCart} />);

    const cartItemCards = screen.queryByText(/Quantity/i);

    expect(cartItemCards).not.toBeInTheDocument();
  });
});
