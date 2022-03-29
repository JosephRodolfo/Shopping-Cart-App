import React from "react";

const CartItemCard = (props) => {


  return (
    <div className="cart-item-card">
      {props.name && <h3 className="cart-item-card-title">{props.name}</h3>}
      {props.price && <p>${props.price}</p>}
      {props.quantity && <p>Quantity: {props.quantity}</p>}
      {props.image && <p>{props.image}</p>}

    </div>
  );
};

export default CartItemCard;
