"use client";

import { Fragment, useContext, useState } from "react";
import CartItem from "./CartItem";
import CheckoutForm from "./CheckoutForm";
import Modal from "../UI/Modal";
import { AiOutlineClose } from "react-icons/ai";
import CartContext from "../../store/cart-context";
import styles from "../../styles/Cart.module.css";
import OrderSentContent from "./OrderSentContent";
import EmptyCartContent from "./EmptyCartContent";

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

  // Buttons
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

  const closeButton = (
    <button
      className={styles["cart__close-button"]}
      onClick={props.onCloseClick}
    >
      <AiOutlineClose className={styles["cart__close-icon"]} />
      Cancel
    </button>
  );

  let modalContent;

  if (!cartContainItems) {
    modalContent = <EmptyCartContent onCloseClick={props.onCloseClick} />;
  } else {
    modalContent = (
      <Fragment className={styles.cart__wrapper}>
        <div>
          <h2 className={styles.cart__summary}>Order summary</h2>
          <ul className={styles.cart__items}>{cartItems}</ul>
          <div className={styles.cart__total}>
            <span>Total Amount</span>
            <span>{formattedTotalAmount}</span>
          </div>
        </div>
        {isCheckout && (
          <CheckoutForm
            onSubmitForm={submitOrderHandler}
            onGoBackClick={onGoBackClickHandler}
          />
        )}
        <div>
          {!isCheckout && closeButton}
          {!isCheckout && orderButton}
        </div>
      </Fragment>
    );
  }

  const isSubmittingModalContent = <p>Sending order data...</p>;

  return (
    <Modal onCloseClick={props.onCloseClick}>
      {!isOrderSent && !isSubmitting && modalContent}
      {isSubmitting && isSubmittingModalContent}
      {isOrderSent && !isSubmitting && <OrderSentContent />}
    </Modal>
  );
};

export default Cart;
