import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import selectItems from "../selectors/items";
import addUpCartItems from "./utils/addUpCartItems";




const Header = (props) => (

  <header className="header">
    <h1>Fake Shopping Site</h1>
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop">Shop</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart: {addUpCartItems(props.items.cartItems)}</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

const mapStateToProps = (state) => {

  return {
    items: selectItems(state.items),
  };
};

export default connect(mapStateToProps)(Header);
