import React from "react";

const CartItemCard = (props) => {


  return (
    <div>
      {props.name && <h3>{props.name}</h3>}
      {props.price && <p>${props.price}</p>}
      {props.quantity && <p>Quantity: {props.quantity}</p>}
      {props.image && <p>{props.image}</p>}

    </div>
  );
};

export default CartItemCard;
