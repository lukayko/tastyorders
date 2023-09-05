import { useContext } from "react";
import { PiBasket } from "react-icons/pi";
import CartContext from "../../store/cart-context";
import styles from "../../styles/HeaderCartBtn.module.css";
import { motion } from "framer-motion";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <motion.button
      className={styles["cart-button"]}
      onClick={props.onCartClick}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{
        scale: 0.9,
      }}
    >
      <PiBasket className={styles["cart-button__icon"]} />
      <span
        className={`${styles["cart-button__badge"]} ${
          props.navbarColored ? styles.colored : ""
        }`}
      >
        {numOfCartItems}
      </span>
    </motion.button>
  );
};

export default HeaderCartButton;
