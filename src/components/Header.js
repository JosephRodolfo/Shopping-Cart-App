import React from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/cart">Cart: {props.numItems}</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
