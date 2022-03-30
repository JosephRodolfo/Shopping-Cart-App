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

const AppRouter = () => {
  const [items, setItems] = useState([]);
  const [numItems, setNum] = useState(0);

  let handleAddItemParent = (item, arrayOfCartItems) => {
    if (!arrayOfCartItems.find((element) => element.name === item.name)) {
      setItems(arrayOfCartItems.concat(item));
    } else {
      let index = arrayOfCartItems
        .map(function (e) {
          return e.name;
        })
        .indexOf(item.name);

      let newState = [...arrayOfCartItems];

      newState[index].quantity += item.quantity;
      setItems(newState);
    }
  };

  const removeCartItemCallBack = (item) => {
    console.log(item);

    let index = items
      .map(function (e) {
        return e.name;
      })
      .indexOf(item);

    let newState = [...items];
    newState.splice(index, 1);
    setItems(newState);
  };

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
                  handleAddItemParent(item, items);
                }}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                removeCartItemCallBack={removeCartItemCallBack}
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
