"use client";

import { useState, useContext } from "react";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";
import styles from "../../styles/MealItem.module.css";
import { motion } from "framer-motion";

const MealItem = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [inputValue, setInputValue] = useState(1);
  const [isWrongInput, setIsWrongInput] = useState(false);

  const cartCtx = useContext(CartContext);

  const formattedPrice = `${props.price.toFixed(2)}`;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputValue;

    if (enteredAmount < 1 || enteredAmount > 10) {
      setIsValid(false);
      return;
    }

    const addToCartHandler = (enteredAmount) => {
      cartCtx.addItem({
        id: props.id,
        name: props.name,
        amount: enteredAmount,
        price: props.price,
      });
    };

    addToCartHandler(enteredAmount);
  };

  const decreaseInputValueHandler = () => {
    if (inputValue > 1) {
      setInputValue((prevValue) => prevValue - 1);
    } else {
      setInputValue(1);
      setIsWrongInput(true);
    }
  };

  const increaseInputValueHandler = () => {
    if (inputValue < 10) {
      setInputValue((prevValue) => prevValue + 1);
    } else {
      setInputValue(10);
      setIsWrongInput(true);
    }
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.meal__description}>{props.description}</p>
        <p className={styles.meal__price}>
          {formattedPrice}
          <span className={styles.meal__symbol}>€</span>
        </p>
      </div>
      <div>
        <form className={styles.meal__form} onSubmit={formSubmitHandler}>
          <Input
            id={props.id}
            value={inputValue}
            decreaseInputValueHandler={decreaseInputValueHandler}
            increaseInputValueHandler={increaseInputValueHandler}
          />
          {isWrongInput && (
            <p className={styles["meal__form-wrong-input"]}>
              Please enter valid amount (1 - 10)
            </p>
          )}
          <motion.button
            className={styles["meal__form-cart-button"]}
            whileHover={{
              backgroundColor: "#333",
            }}
            whileTap={{
              scale: 0.9,
            }}
          >
            Add to cart
          </motion.button>
        </form>
      </div>
    </li>
  );
};

export default MealItem;
