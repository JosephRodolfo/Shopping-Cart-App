import React from "react";
import { useState } from "react";

const ShopItemCard = (props) => {
    let [quant, setQuant] = useState(1);

  let handleAddItem = () => {
    const newItem = {
      price: props.price,
      name: props.name,
      quantity: quant
    };
    props.handleAddItemParent(newItem);
  };

  return (
    <div className="shop-item-card-container">
      <div className="image-container">
        <img src={props.picture} />
      </div>
      <input onChange={(e)=> {setQuant(parseInt(e.target.value))}} type="number" placeholder="1"/>
      <button onClick={handleAddItem}>Add to cart</button>
      <div>
        <p>{props.name}</p>

        <p>Price</p>
        <p>${props.price}</p>
      </div>
    </div>
  );
};

export default ShopItemCard;
