import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import HomePage from "../components/HomePage";
import ShopPage from "../components/ShopPage";
import AboutPage from "../components/AboutPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import CartPage from "../components/CartPage";

const AppRouter = (props) => {
  const [items, setItems] = useState([]);
  const [numItems, setNum] = useState(0);

  let handleAddItemParent = (item) => {
    if (!items.find((element) => element.name === item.name)) {
      setItems(items.concat(item));
    } else {
      let index = items
        .map(function (e) {
          return e.name;
        })
        .indexOf(item.name);

      let newState = [...items];
      newState[index].quantity += 1;
      setItems(newState);
    }
  };

  let updateCartHeader = () => {
    let startingNumber = 0;

    items.forEach((element) => {
      startingNumber += element.quantity;
    });
    return startingNumber;
  };

  useEffect(() => {
    setNum(updateCartHeader());
    console.log(items);
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
                  handleAddItemParent(item);
                }}
              />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage cartItems={items} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
