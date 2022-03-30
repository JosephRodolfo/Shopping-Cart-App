import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import HomePage from "../components/HomePage";
import ShopPage from "../components/ShopPage";
import AboutPage from "../components/AboutPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import CartPage from "../components/CartPage";
import addUpCartItems from "../components/utils/addUpCartItems";
import addItem from "../components/utils/addItem";
import editCartQuantity from "../components/utils/editCartQuantity";
import removeCartItem from "../components/utils/removeCartItem";

const AppRouter = () => {
  const [items, setItems] = useState([]);
  const [numItems, setNum] = useState(0);

  useEffect(() => {
    setNum(addUpCartItems(items));
  }, [items]);

  return (
    <BrowserRouter>
      <div>
        <Header numItems={numItems} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/shop"
            element={
              <ShopPage
                handleAddItemParent={(item) => {
                  setItems(addItem(item, items));
                }}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                removeCartItemCallBack={(item) => {
                  setItems(removeCartItem(item, items));
                }}
                handleEditQuantity={(quantity, item) => {
                  setItems(editCartQuantity(quantity, item, items));
                }}
                cartItems={items}
              />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
