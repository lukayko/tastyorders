import { MdOutlineFastfood } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../../styles/OrderSentContent.module.css";

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
      <button
        className={styles["order__close-button"]}
        onClick={props.onCloseClick}
      >
        <AiOutlineClose className={styles["order__close-icon"]} />
        Close
      </button>
    </div>
  );
};

export default OrderSentContent;
