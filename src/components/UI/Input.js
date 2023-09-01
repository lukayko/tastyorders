"use client";

import { forwardRef } from "react";
import styles from "../../styles/Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
