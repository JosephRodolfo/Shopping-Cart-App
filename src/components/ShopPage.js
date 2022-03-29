import React from "react";
import ShopItemCard from "./ShopItemCard";
import bike from "../assets/bike.png";

const ShopPage = (props) => {

let handleAddItemParent = (item)=>

{
props.handleAddItemParent(item);
}

  return (
    <div className="shop-products-container">
      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={100} name="Bike"/>
      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={200}  name="Helmet"/>

      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={240} name="Pedal"/>

      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={230} name="Seat"/>
    </div>
  );
};
export default ShopPage;
