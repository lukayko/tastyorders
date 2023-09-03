"use client";

import { useRef, useState } from "react";
import styles from "../../styles/CheckoutForm.module.css";

const CheckoutForm = (props) => {
  const nameInputRef = useRef();
  const phoneInputRef = useRef();
  const cityInputRef = useRef();
  const streetInputRef = useRef();
  const postalcodeInputRef = useRef();
  const [isInputValid, setInputValid] = useState({
    name: true,
    phone: true,
    city: true,
    street: true,
    postalcode: true,
  });

  // Form Validation
  const isEmpty = (value) => {
    return value.trim() === "";
  };

  const isFiveChars = (value) => {
    return value.trim().length >= 5;
  };

  const phonePattern = /^\+[0-9]{9,12}$/;

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalcode = postalcodeInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredPhoneIsValid = phonePattern.test(enteredPhone);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalcodeIsValid = isFiveChars(enteredPostalcode);

    setInputValid({
      name: enteredNameIsValid,
      phone: enteredPhoneIsValid,
      city: enteredCityIsValid,
      street: enteredStreetIsValid,
      postalcode: enteredPostalcodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredPhoneIsValid &&
      enteredCityIsValid &&
      enteredStreetIsValid &&
      enteredPostalcodeIsValid;

    if (!formIsValid) {
      return;
    } else {
    }

    props.onSubmitForm({
      name: enteredName,
      phone: enteredPhone,
      city: enteredCity,
      street: enteredStreet,
      postalcode: enteredPostalcode,
    });
  };

  const nameControlCSS = isInputValid.name
    ? styles.control
    : styles.control + styles.invalid;
  const phoneControlCSS = isInputValid.phone
    ? styles.control
    : styles.control + styles.invalid;
  const cityControlCSS = isInputValid.city
    ? styles.control
    : styles.control + styles.invalid;
  const streetControlCSS = isInputValid.street
    ? styles.control
    : styles.control + styles.invalid;
  const postalcodeControlCSS = isInputValid.postalcode
    ? styles.control
    : styles.control + styles.invalid;

  return (
    <form onSubmit={confirmHandler}>
      <div className={nameControlCSS}>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameInputRef}></input>
        {!isInputValid.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={phoneControlCSS}>
        <label htmlFor='phone'>Phone number</label>
        <input type='text' id='phone' ref={phoneInputRef}></input>
        {!isInputValid.phone && <p>Please enter a valid phone number.</p>}
      </div>
      <div className={streetControlCSS}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}></input>
        {!isInputValid.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={cityControlCSS}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}></input>
        {!isInputValid.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={postalcodeControlCSS}>
        <label htmlFor='postalcode'>Postal Code</label>
        <input type='text' id='postalcode' ref={postalcodeInputRef}></input>
        {!isInputValid.postalcode && (
          <p>Please enter a valid postal code (5 characters long).</p>
        )}
      </div>
      <button type='button' onClick={props.onGoBackClick}>
        Go back
      </button>
      <button>Confirm</button>
    </form>
  );
};

export default CheckoutForm;
