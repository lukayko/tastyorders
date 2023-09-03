"use client";

import styles from "../../styles/CartItem.module.css";

const CartItem = (props) => {
  const price = `${(props.price * props.amount).toFixed(2)}`;

  return (
    <li className={styles["cart__item"]}>
      <div className={styles["cart__item-container"]}>
        <h3>{props.name}</h3>
        <div className={styles["cart__item-amount"]}>
          <button
            className={styles["cart__item-amount-left-button"]}
            onClick={props.onRemove}
          >
            -
          </button>
          <p className={styles["cart__item-amount"]}>{props.amount}</p>
          <button
            className={styles["cart__item-amount-right-button"]}
            onClick={props.onAdd}
          >
            +
          </button>
        </div>
        <div className={styles["cart__item-price"]}>
          <span>{price}</span>
          <span className={styles["cart__item-price-symbol"]}>€</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
