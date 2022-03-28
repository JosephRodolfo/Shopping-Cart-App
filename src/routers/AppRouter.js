import React from "react";
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import HomePage from "../components/HomePage";
import ShopPage from "../components/ShopPage";
import AboutPage from "../components/AboutPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import CartPage from "../components/CartPage";




const AppRouter = () => {
  return (

  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/cart" element={<CartPage/>} />

        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  </BrowserRouter>
  )
  }

export default AppRouter;




