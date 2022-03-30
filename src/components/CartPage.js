import React from "react";
import { useState } from "react";
import CartItemCard from "./CartItemCard";

const CartPage = (props) => {
  const [items, setItems] = useState([]);

  const sumAllItems = (allItems) => {
    let arr = allItems || [];
    let total = 0;

    arr.forEach((element) => {
      let multiplied = element.quantity * element.price;
      total += multiplied;
    });

    return total;
  };

  const removeCartItemCallBack = (item) => {

    props.removeCartItemCallBack(item);
  };

  const handleEditQuantity = (quantity, name)=> {

    props.handleEditQuantity(quantity, name);
  }

  return (
    <div>
      {props.cartItems?.map((element, index) => (
        <CartItemCard
          key={index}
          name={element.name}
          price={element.price}
          quantity={element.quantity}
          image={element.image}
          removeCartItemCallBack={removeCartItemCallBack}
          handleEditQuantity={handleEditQuantity}
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
