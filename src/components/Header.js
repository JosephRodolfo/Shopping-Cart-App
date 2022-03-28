import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
      <h1>Fake Shopping Site</h1>
      <NavLink to="/" exact={true}>
        Home
      </NavLink>
      <NavLink to="/shop">
        Shop
      </NavLink>
      <NavLink to="/about">
        About
      </NavLink>
      <NavLink to="/cart">
        Cart
      </NavLink>
    </header>
  );

  export default Header;