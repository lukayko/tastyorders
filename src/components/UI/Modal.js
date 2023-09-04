"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import styles from "../../styles/Modal.module.css";
import { AnimatePresence, motion } from "framer-motion";

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
  // exit: {
  //   opacity: 0,
  //   transition: {
  //     type: "tween",
  //     duration: 0.2,
  //   },
  // },
};

// Modal animation
const modalVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  // exit: {
  //   opacity: 0,
  //   transition: {
  //     type: "tween",
  //     duration: 0.2,
  //   },
  // },
};

const Backdrop = (props) => {
  return (
    // <AnimatePresence>
    <motion.div
      className={styles.backdrop}
      onClick={props.onCloseClick}
      variants={backdropVariants}
      initial='hidden'
      animate='visible'
      // exit='exit'
    />
    // </AnimatePresence>
  );
};

const ModalOverlay = (props) => {
  return (
    // <AnimatePresence>
    <motion.div
      className={styles.modal}
      variants={modalVariants}
      initial='hidden'
      animate='visible'
      // exit='exit'
    >
      <div>{props.children}</div>
    </motion.div>
    // </AnimatePresence>
  );
};

const Modal = (props) => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const closeClickHandler = () => {
  //   setIsModalOpen(false);
  //   props.onCloseClick();
  // };

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
