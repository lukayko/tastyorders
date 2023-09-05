import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/EmptyCartContent.module.css";
import { motion } from "framer-motion";

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
      <motion.button
        className={styles["empty-cart__button"]}
        onClick={props.onCloseClick}
        whileHover={{
          borderColor: "#f8b602",
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <AiOutlineClose className={styles["empty-cart__icon"]} />
        Cancel
      </motion.button>
    </div>
  );
};

export default EmptyCartContent;
