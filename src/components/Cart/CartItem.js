"use client";

import styles from "../../styles/CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={styles["cart__item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={styles.cart__summary}>
          <span className={styles["cart__item-price"]}>{price}</span>
          <span className={styles["cart__item-amount"]}>x {props.amount}</span>
        </div>
      </div>
      <div className={styles["cart__button-actions"]}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
