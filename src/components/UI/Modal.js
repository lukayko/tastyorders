import { createPortal } from "react-dom";
import styles from "../../styles/Modal.module.css";
import { motion } from "framer-motion";

// Backdrop animation
const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

// Modal animation
const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Backdrop = (props) => {
  return (
    <motion.div
      className={styles.backdrop}
      onClick={props.onCloseClick}
      variants={backdropVariants}
      initial='hidden'
      animate='visible'
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <motion.div
      className={styles.modal}
      variants={modalVariants}
      initial='hidden'
      animate='visible'
    >
      <div>{props.children}</div>
    </motion.div>
  );
};

const Modal = (props) => {
  const targetElement = document.getElementById("overlays");

  return (
    <>
      {createPortal(
        <Backdrop onCloseClick={props.onCloseClick} />,
        targetElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        targetElement
      )}
    </>
  );
};

export default Modal;
