"use client";

import { Fragment, useContext, useState } from "react";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CheckoutForm from "./CheckoutForm";
import Modal from "../UI/Modal";
import { AiOutlineClose } from "react-icons/ai";
import CartContext from "../../store/cart-context";

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
    <div className={classes.actions}>
      {cartContainItems && (
        <button className={classes.button} onClick={orderClickHandler}>
          Order
        </button>
      )}
    </div>
  );

  const modalContent = (
    <Fragment>
      <button className={classes["close-button"]} onClick={props.onCloseClick}>
        Close
        <AiOutlineClose className={classes["x-icon"]} />
      </button>
      <h2>Order summary</h2>
      <div className={classes["order-items"]}>
        <p>Meal</p>
        <p>Price</p>
        <p>Quantity</p>
      </div>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
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
      <p>Order sent successfully!</p>
      <button className={classes.button} onClick={props.onCloseClick}>
        Close
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
