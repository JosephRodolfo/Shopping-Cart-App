import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { addItemToCart } from "../actions/cartItems";


const ShopItemCard = ({dispatch, id, picture, price, name}) => {
    let [quant, setQuant] = useState(1);

  

  return (
    <div className="shop-item-card-container">
      <div className="image-container">
        <img src={picture} />
      </div>
      <input onChange={(e)=> {setQuant(parseInt(e.target.value))}} type="number" placeholder="1"/>
      <button onClick={(e)=>{
        dispatch(addItemToCart( { id, price, name, quant } ))}}>Add to cart</button>
      <div>
        <p>{name}</p>

        <p>Price</p>
        <p>${price}</p>
      </div>
    </div>
  );
};






export default connect()(ShopItemCard);


