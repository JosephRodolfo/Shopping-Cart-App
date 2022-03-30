import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItemCard from "../components/CartItemCard";
import CartPage from "../components/CartPage";
import ShallowRenderer from 'react-test-renderer/shallow'; //

describe("edit button", () => {
 
  it("to change edit to save on click", () => {
    render(<CartItemCard />);
    const button = screen.getByRole("button", { name: "Edit" });

    userEvent.click(button);

    expect(screen.getByRole("button", {name: "Save"}).textContent).toMatch(/Save/i);
  });


  it("to change to save on clicking edit", () => {
    
    render(<CartItemCard />);

    const button = screen.getByRole("button", { name: "Edit" });

    userEvent.click(button);


    userEvent.click(button);

    expect(screen.getByRole("button", {name: "Edit"}).textContent).toMatch(/Edit/i);
  });


/*
  it("to remove item on click remove button", () => {
    
    render(<CartItemCard />);
    render(<CartPage />);
    let shallowList = shallow(<CartPage />);

    const button = screen.getByRole("button", { name: "Remove" });

    userEvent.click(button);
    expect(shallowList.length.toBe(4));


  //  expect(screen.getByRole("button", {name: "Remove"})).toBe(null);
  });

*/
  
});


