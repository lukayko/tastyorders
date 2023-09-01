"use client";

import { Fragment, useContext, useState } from "react";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import Modal from "../UI/Modal";
import { AiOutlineClose } from "react-icons/ai";
import CartContext from "../../store/cart-context";
import styles from "../../styles/Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderSent, setIsOrderSent] = useState(false);

  const onAddItemHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const onRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const orderClickHandler = () => {
    setIsCheckout(true);
  };

  const onGoBackClickHandler = () => {
    setIsCheckout(false);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      "https://tastyorders-8f5e9-default-rtdb.europe-west1.firebasedatabase.app/order.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmitting(false);
    setIsOrderSent(true);
    cartCtx.clearCart();
  };

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={onAddItemHandler.bind(null, item)}
      onRemove={onRemoveItemHandler.bind(null, item.id)}
    />
  ));

  const formattedTotalAmount = `${cartCtx.totalAmount.toFixed(2)}€`;
  const cartContainItems = cartCtx.items.length > 0;
  const orderButton = (
    <div>
      {cartContainItems && (
        <button
          className={styles["cart__order-button"]}
          onClick={orderClickHandler}
        >
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <Fragment>
      <button
        className={styles["cart__close-button"]}
        onClick={props.onCloseClick}
      >
        Close
        <AiOutlineClose className={styles["cart__close-icon"]} />
      </button>
      <h2>Order summary</h2>
      <div className={styles["cart__items-description"]}>
        <p>Meal</p>
        <p>Price</p>
        <p>Quantity</p>
      </div>
      <ul className={styles["cart__items"]}>{cartItems}</ul>
      <div className={styles.cart__total}>
        <span>Total Amount</span>
        <span>{formattedTotalAmount}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          onSubmitForm={submitOrderHandler}
          onGoBackClick={onGoBackClickHandler}
        />
      )}
      {!isCheckout && orderButton}
    </Fragment>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const isOrderSentModalContent = (
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

  return (
    <Modal onCloseClick={props.onCloseClick}>
      {!isOrderSent && !isSubmitting && modalContent}
      {isSubmitting && isSubmittingModalContent}
      {isOrderSent && !isSubmitting && isOrderSentModalContent}
    </Modal>
  );
};

export default Cart;
