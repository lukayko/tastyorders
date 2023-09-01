"use client";

import { useContext } from "react";
import { PiBasket } from "react-icons/pi";
import CartContext from "../../store/cart-context";
import styles from "../../styles/HeaderCartBtn.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={styles["cart-button"]} onClick={props.onCartClick}>
      <PiBasket className={styles["cart-button__icon"]} />
      <span className={styles["cart-button__badge"]}>{numOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
