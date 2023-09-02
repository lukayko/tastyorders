const OrderSentContent = () => {
  return (
    <Fragment>
      <h2>Thank You!</h2>
      <p>We have received your order and will begin working on it shortly.</p>
      <button
        className={styles["cart__close-button"]}
        onClick={props.onCloseClick}
      >
        Close
        <AiOutlineClose className={styles["cart__close-icon"]} />
      </button>
    </Fragment>
  );
};

export default OrderSentContent;
