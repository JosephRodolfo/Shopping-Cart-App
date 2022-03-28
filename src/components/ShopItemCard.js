import React from "react";

const ShopItemCard = (props) => {
  let handleAddItem = () => {
    const newItem = {
      price: props.price,
      name: props.name,
      quantity: 1
    };
    props.handleAddItemParent(newItem);
  };

  return (
    <div className="shop-item-card-container">
      <div className="image-container">
        <img src={props.picture} />
      </div>
      <input type="number" placeholder="1" />
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
