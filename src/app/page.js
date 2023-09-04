"use client";

import { useState } from "react";
import Header from "../components/Layout/Header";
import Meals from "../components/Meals/Meals";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";
import "../styles/globals.css";

function Home() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const showCartHandler = () => {
    setCartIsVisible(true);
    document.body.style.overflow = "hidden";
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
    document.body.style.overflow = "unset";
  };

  return (
    <CartProvider>
      {cartIsVisible && <Cart onCloseClick={hideCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default Home;
