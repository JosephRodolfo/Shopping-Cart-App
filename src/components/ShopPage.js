import React from "react";
import ShopItemCard from "./ShopItemCard";
import bike from "../assets/bike.png";
import { connect } from "react-redux";
import selectItems from "../selectors/items";
import ItemListFilters from "./ItemListFilters";

const ShopPage = (props) => {



  return (
    <div>
      <ItemListFilters />
    <div className="shop-products-container">
      {props.items.shopItems.map((element) => {
        return <ShopItemCard key={element.id} {...element} />;
      })}

      {/* <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={100} name="Bike"/>
      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={200}  name="Helmet"/>

      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={240} name="Pedal"/>

      <ShopItemCard handleAddItemParent={handleAddItemParent} picture={bike} price={230} name="Seat"/> */}
    </div>
    </div>
  );
};
//export default ShopPage;

const mapStateToProps = (state) => {

  return {
    items: selectItems(state.items, state.filters),
  };
};

export default connect(mapStateToProps)(ShopPage);
