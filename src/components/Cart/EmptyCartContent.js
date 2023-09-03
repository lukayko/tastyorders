"use client";

import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/EmptyCartContent.module.css";

const EmptyCartContent = (props) => {
  return (
    <div className={styles["empty-cart"]}>
      <h2 className={styles["empty-cart__emoji"]}>
        <span>:</span>/
      </h2>
      <h2 className={styles["empty-cart__title"]}>Your cart is empty.</h2>
      <p className={styles["empty-cart__text"]}>
        Add delicious items from our menu to get started!
      </p>
      <button
        className={styles["empty-cart__button"]}
        onClick={props.onCloseClick}
      >
        <AiOutlineClose className={styles["empty-cart__icon"]} />
        Cancel
      </button>
    </div>
  );
};

export default EmptyCartContent;
