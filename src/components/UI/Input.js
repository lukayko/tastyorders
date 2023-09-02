"use client";

import styles from "../../styles/Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.input__container}>
      <button
        type='button'
        className={styles["input__button-left"]}
        onClick={props.decreaseInputValueHandler}
      >
        -
      </button>
      <input type='number' id={props.id} value={props.value} readOnly />
      <button
        type='button'
        className={styles["input__button-right"]}
        onClick={props.increaseInputValueHandler}
      >
        +
      </button>
    </div>
  );
};

export default Input;
