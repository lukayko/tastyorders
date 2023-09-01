"use client";

import ReactDOM from "react-dom";
import styles from "../../styles/Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onCloseClick} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const targetElement = document.getElementById("overlays");

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onCloseClick={props.onCloseClick} />,
        targetElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        targetElement
      )}
    </>
  );
};

export default Modal;
