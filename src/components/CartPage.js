import React from "react";
import { useState } from "react";
import CartItemCard from "./CartItemCard";

const CartPage = (props) => {
  console.log(props.cartItems);
  const [items, setItems] = useState([]);

  const sumAllItems = (allItems) => {
    let total = 0;

    allItems.forEach((element) => {
      let multiplied = element.quantity * element.price;
      total += multiplied;
    });

    return total;
  };


  return (
    <div>
      {props.cartItems.map((element, index) => (
        <CartItemCard
          key={index}
          name={element.name}
          price={element.price}
          quantity={element.quantity}
          image={element.image}
        />
      ))}

      <div className="submit-total-checkout-container">
        <h2>Total: ${sumAllItems(props.cartItems)}</h2>
        <button>Checkout</button>

      </div>
    </div>
  );
};

export default CartPage;
