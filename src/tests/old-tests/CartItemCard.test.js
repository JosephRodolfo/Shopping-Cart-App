import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItemCard from "../components/CartItemCard";
import CartPage from "../components/CartPage";
import { PropTypes } from "react";
import AppRouter from "../routers/AppRouter";

describe("edit button", () => {
  it("to change edit to save on click", () => {
    render(<CartItemCard />);
    const button = screen.getByRole("button", { name: "Edit" });

    userEvent.click(button);

    expect(screen.getByRole("button", { name: "Save" }).textContent).toMatch(
      /Save/i
    );
  });

  it("edit button changes to save on clicking edit", () => {
    render(<CartItemCard />);

    const button = screen.getByRole("button", { name: "Edit" });

    userEvent.click(button);

    userEvent.click(button);

    expect(screen.getByRole("button", { name: "Edit" }).textContent).toMatch(
      /Edit/i
    );
  });
});

describe("remove button", () => {
  it("remove button to call callback only once", () => {
    const onChangeMock = jest.fn();

    render(<CartItemCard removeCartItemCallBack={onChangeMock} />);

    const button = screen.getByRole("button", { name: "Remove" });

    userEvent.click(button);

    let listOfCartItems = screen.queryAllByRole("CartItemCard");
    expect(onChangeMock).toHaveBeenCalledTimes(1);

  });

  it("remove button calls callback with correct value", () => {
    const onChangeMock = jest.fn();

    render(<CartItemCard removeCartItemCallBack={onChangeMock} name="Bike" />);

    const button = screen.getByRole("button", { name: "Remove" });

    userEvent.click(button);

    expect(onChangeMock).toHaveBeenCalledWith("Bike");
  });
});

describe("number input", () => {
  it("edit quantity input passes correct value to callback function", () => {
    const onChangeMock = jest.fn();

    render(<CartItemCard name="Pedal" handleEditQuantity={onChangeMock} />);

    const button = screen.getByRole("button", { name: "Edit" });
    userEvent.click(button);

    const numberInput = screen.getByRole("spinbutton", { name: "" });

    userEvent.type(numberInput, "9");

    expect(onChangeMock).toHaveBeenCalledWith(parseInt("9"), "Pedal");
  });
});
