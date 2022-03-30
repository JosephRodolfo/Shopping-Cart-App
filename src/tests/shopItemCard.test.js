import ShopItemCard from '../components/ShopItemCard'
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe(" add item to cart button", () => {
    it("add to cart button callback contains correct shop item object", () => {
      const onChangeMock = jest.fn();
  
      render(<ShopItemCard name="Pedal" price={100}handleAddItemParent={onChangeMock} />);
      const button = screen.getByRole("button", { name: "Add to cart" });

        userEvent.click(button);
  
      //const numberInput = screen.getByRole("spinbutton", { name: "" });
  
      //userEvent.type(numberInput, );
  
      expect(onChangeMock).toHaveBeenCalledWith({ quantity: 1, name: "Pedal", price: 100});
    });

    it("add to cart button callback object quantity property reflects change from number input", () => {
        const onChangeMock = jest.fn();
    
        render(<ShopItemCard name="Helmet" price={100} handleAddItemParent={onChangeMock} />);
        const button = screen.getByRole("button", { name: "Add to cart" });
  
        const numberInput = screen.getByRole("spinbutton", { name: "" });
    
        userEvent.type(numberInput, "10");

        userEvent.click(button);
    
     
    
        expect(onChangeMock).toHaveBeenCalledWith({ quantity: parseInt("10"), name: "Helmet", price: 100});
      });
  });