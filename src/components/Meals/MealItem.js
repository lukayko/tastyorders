"use client";

import { useRef, useState, useContext } from "react";
import Input from "../UI/Input";
import CartContext from "../../store/cart-context";
import styles from "../../styles/MealItem.module.css";

const MealItem = (props) => {
  const [isValid, setIsValid] = useState(true);
  const inputRef = useRef();
  const cartCtx = useContext(CartContext);

  const formattedPrice = `${props.price.toFixed(2)}€`;

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = +inputRef.current.value;

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

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={styles.meal__description}>{props.description}</p>
        <p className={styles.meal__price}>{formattedPrice}</p>
      </div>
      <div>
        <form className={styles.meal__form} onSubmit={formSubmitHandler}>
          <Input
            ref={inputRef}
            label='Quantity'
            input={{
              id: props.id,
              type: "number",
              min: "1",
              step: "1",
              defaultValue: "1",
            }}
          />
          <button>Add to Cart</button>
          {!isValid && <p>Please enter valid amount (1 - 10)</p>}
        </form>
      </div>
    </li>
  );
};

export default MealItem;
