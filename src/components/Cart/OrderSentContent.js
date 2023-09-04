import { MdOutlineFastfood } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/OrderSentContent.module.css";
import { motion } from "framer-motion";

const OrderSentContent = (props) => {
  return (
    <div className={styles.order__container}>
      <MdOutlineFastfood className={styles["order__food-icon"]} />
      <h2 className={styles.order__title}>
        Bon appétit<span>!</span>
      </h2>
      <p>
        Your order is in our kitchen. You will have it at your doorstep in no
        time.
      </p>
      <motion.button
        className={styles["order__close-button"]}
        onClick={props.onCloseClick}
        whileHover={{
          color: "#f8b602",
          borderColor: "#f8b602",
        }}
        whileTap={{
          scale: 0.9,
        }}
      >
        <AiOutlineClose className={styles["order__close-icon"]} />
        Close
      </motion.button>
    </div>
  );
};

export default OrderSentContent;
