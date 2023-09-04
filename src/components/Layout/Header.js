"use client";

import { useState, useEffect } from "react";
import HeaderCartButton from "./HeaderCartButton";
import FoodIMG from "../../../public/images/food.png";
import { MdFoodBank } from "react-icons/md";
import Image from "next/image";
import styles from "../../styles/Header.module.css";

const Header = (props) => {
  const [navbarColored, setNavbarColored] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 150) {
        setNavbarColored(true);
      } else {
        setNavbarColored(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", changeNavbar);
    };
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${navbarColored ? styles.colored : ""}`}
      >
        <div className={styles["header__logo-container"]}>
          <MdFoodBank className={styles.header__logo} />
          <h1>TastyOrders</h1>
        </div>

        <HeaderCartButton
          onCartClick={props.onCartClick}
          navbarColored={navbarColored}
        />
      </header>
      <div className={styles["header__bg-container"]}>
        <Image src={FoodIMG} alt='Food on table'></Image>
      </div>
    </>
  );
};

export default Header;
