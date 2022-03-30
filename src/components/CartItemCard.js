import React from "react";
import { useState } from "react";
const CartItemCard = (props) => {
  const [editCart, setEdit] = useState(true);

  const removeItem = (item, properties) => {
    let itemName = properties.name;

    //  const index = props.map(object => object.name).indexOf(itemName);
    props.removeCartItemCallBack(itemName);
  };

  const handleChangeNumber = () => {
    let newEdit = !editCart;

    setEdit(newEdit);

  };

  const handleEditQuantity = (quantity, name) => {
    let itemName = name.name;

    props.handleEditQuantity(quantity, itemName);
  };

  return (
    <div className="cart-item-card">
      {props.name && <h3 className="cart-item-card-title">{props.name}</h3>}
      {props.price && <p>${props.price}</p>}
      <div className="edit-number-container">
        {editCart ? (
          <p>Quantity: {props.quantity}</p>
        ) : (
          <input
            onChange={(e) => {
              handleEditQuantity(parseInt(e.target.value), props);
            }}
            type="number"
            placeholder={props.quantity}
            value={props.quantity}
          />
        )}
        <button id="edit-quantity" onClick={handleChangeNumber}>{editCart ? "Edit" : "Save"}</button>
      </div>
      {props.image && <p>{props.image}</p>}
      <button onClick={(e) => removeItem(e, props)}>Remove</button>
    </div>
  );
};

export default CartItemCard;
