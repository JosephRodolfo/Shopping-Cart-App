import React from "react";
import { useState } from "react";
import CartItemCard from "./CartItemCard";
import { connect } from "react-redux";
import selectItems from "../selectors/items";


const CartPage = (props) => {
//  const [items, setItems] = useState([]);

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

  const handleEditQuantity = (quantity, name) => {
    props.handleEditQuantity(quantity, name);
  };

  return (
    <div>
      <div id="cart-items-container">
      {props.items.cartItems.map((element) => {
        return <CartItemCard key={element.id} {...element} />;
      })}
      </div>
      <div className="submit-total-checkout-container">
        <h2>Total: ${sumAllItems(props.cartItems)}</h2>
        <button>Checkout</button>
      </div>
    </div>
  );
};



const mapStateToProps = (state) => {

  return {
    items: selectItems(state.items),
  };
};

export default connect(mapStateToProps)(CartPage);