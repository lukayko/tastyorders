"use client";

import styles from "../../styles/MealsSummary.module.css";
import { motion } from "framer-motion";

const MealsSummary = () => {
  return (
    <motion.section
      className={styles.summary}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>Deliciously Easy.</h2>
      <h3>Order, Eat, Repeat!</h3>
      <p>
        Satisfy Your Cravings with us Fast, Fresh, Flavors Delivered to Your
        Doorstep.
      </p>
    </motion.section>
  );
};

export default MealsSummary;
