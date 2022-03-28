import React from "react";
import { useState } from "react";
import CartItemCard from "./CartItemCard";

const CartPage = (props) => {
  console.log(props.cartItems);
  const [items, setItems] = useState([]);

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
    </div>
  );
};

export default CartPage;
