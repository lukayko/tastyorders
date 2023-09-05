"use client";

import { useState, useEffect } from "react";
import HeaderCartButton from "./HeaderCartButton";
import FoodIMG from "../../../public/images/food.png";
import { MdFoodBank } from "react-icons/md";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import Link from "next/link";

const Header = (props) => {
  // Set navbarColored to true when the user scrolls down 150px
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

  useEffect(() => {
    console.log("Made by LUKAS CERVENKA (2023) - https://lukascervenka.dev");
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${navbarColored ? styles.colored : ""}`}
      >
        <Link href='/' className={styles["header__logo-container"]}>
          <MdFoodBank className={styles.header__logo} />
          <h1>TastyOrders</h1>
        </Link>
        <HeaderCartButton
          onCartClick={props.onCartClick}
          navbarColored={navbarColored}
        />
      </header>
      <div className={styles["header__bg-container"]}>
        <Image src={FoodIMG} priority={true} quality={80} alt='Food on table' />
      </div>
    </>
  );
};

export default Header;
