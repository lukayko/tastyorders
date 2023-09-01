import HeaderCartButton from "./HeaderCartButton";
import FoodIMG from "../../../public/images/food.png";
import { MdFoodBank } from "react-icons/md";
import classes from "./Header.module.css";
import Image from "next/image";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes["heading-container"]}>
          <MdFoodBank style={{ height: "3rem", width: "3rem" }} />
          <h1>TastyOrders</h1>
        </div>

        <HeaderCartButton onCartClick={props.onCartClick} />
      </header>
      <div className={classes["main-image"]}>
        <Image
          src={FoodIMG}
          height={"100%"}
          width={"100%"}
          alt='Food on table'
        ></Image>
      </div>
    </>
  );
};

export default Header;
