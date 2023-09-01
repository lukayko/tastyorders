"use client";

import HeaderCartButton from "./HeaderCartButton";
import FoodIMG from "../../../public/images/food.png";
import { MdFoodBank } from "react-icons/md";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles["header__logo-container"]}>
          <MdFoodBank className={styles.header__logo} />
          <h1>TastyOrders</h1>
        </div>

        <HeaderCartButton onCartClick={props.onCartClick} />
      </header>
      <div className={styles["header__bg-container"]}>
        <Image src={FoodIMG} alt='Food on table'></Image>
      </div>
    </>
  );
};

export default Header;
