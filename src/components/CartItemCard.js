import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/cartItems";
//import editCartQuantity from "./utils/editCartQuantity";
import { editCartQuantity } from "../actions/cartItems";
const CartItemCard = ({name, price, quant, id, dispatch, image}) => {
  const [editCart, setEdit] = useState(true);



  const handleChangeNumber = () => {
    let newEdit = !editCart;

    setEdit(newEdit);

  };


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
              let x = e.target.value;

              dispatch(editCartQuantity(id, x))
            }}
            type="number"
            placeholder={quant}
            value={quant}
          />
        )}
        <button onClick={handleChangeNumber} id="edit-quantity">{editCart ? "Edit" : "Save"}</button>
      </div>
      {image && <p>{image}</p>}
      <button onClick={() => {dispatch(removeItem({id}))}}>Remove</button>
    </div>
  );
};



export default connect()(CartItemCard);

