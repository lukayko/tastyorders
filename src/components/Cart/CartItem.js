"use client";

import styles from "../../styles/CartItem.module.css";
import { motion } from "framer-motion";

const CartItem = (props) => {
  const price = `${(props.price * props.amount).toFixed(2)}`;

  return (
    <li className={styles["cart__item"]}>
      <div className={styles["cart__item-container"]}>
        <h3>{props.name}</h3>
        <motion.div
          className={styles["cart__item-amount"]}
          whileTap={{ scale: 0.9 }}
        >
          <motion.button
            className={styles["cart__item-amount-left-button"]}
            onClick={props.onRemove}
            whileHover={{
              color: "#333",
            }}
          >
            -
          </motion.button>
          <p className={styles["cart__item-amount"]}>{props.amount}</p>
          <motion.button
            className={styles["cart__item-amount-right-button"]}
            onClick={props.onAdd}
            whileHover={{
              color: "#333",
            }}
          >
            +
          </motion.button>
        </motion.div>
        <div className={styles["cart__item-price"]}>
          <span>{price}</span>
          <span className={styles["cart__item-price-symbol"]}>€</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
