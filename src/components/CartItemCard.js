import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/cartItems";
const CartItemCard = ({name, price, quant, id, dispatch, image}) => {
  const [editCart, setEdit] = useState(true);


/*
  const handleChangeNumber = () => {
    let newEdit = !editCart;

    setEdit(newEdit);

  };*/
/*
  const handleEditQuantity = (quantity, name) => {
    let itemName = name.name;

    props.handleEditQuantity(quantity, itemName);
  };*/

  return (
    <div className="cart-item-card">
      {name && <h3 className="cart-item-card-title">{name}</h3>}
      {price && <p>${price}</p>}
      <div className="edit-number-container">
        {editCart ? (
          <p>Quantity: {quant}</p>
        ) : (
          <input
            onChange={(e) => {
            }}
            type="number"
            placeholder={quant}
            value={quant}
          />
        )}
        <button id="edit-quantity">{editCart ? "Edit" : "Save"}</button>
      </div>
      {image && <p>{image}</p>}
      <button onClick={(e) => {dispatch(removeItem({id}))}}>Remove</button>
    </div>
  );
};



export default connect()(CartItemCard);

