"use client";

import styles from "../../styles/Input.module.css";
import { motion } from "framer-motion";

const Input = (props) => {
  return (
    <motion.div className={styles.input__container} whileTap={{ scale: 0.9 }}>
      <motion.button
        type='button'
        className={styles["input__button-left"]}
        onClick={props.decreaseInputValueHandler}
        whileHover={{
          color: "#333",
        }}
      >
        -
      </motion.button>
      <input type='number' id={props.id} value={props.value} readOnly />
      <motion.button
        type='button'
        className={styles["input__button-right"]}
        onClick={props.increaseInputValueHandler}
        whileHover={{
          color: "#333",
        }}
      >
        +
      </motion.button>
    </motion.div>
  );
};

export default Input;
