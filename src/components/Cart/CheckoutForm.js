import { useRef, useState } from "react";
import styles from "../../styles/CheckoutForm.module.css";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence>
      {props.isVisible && (
        <motion.div
          className={styles.checkout__wrapper}
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <h2>Contact Information</h2>
          <form onSubmit={confirmHandler}>
            <div>
              <div
                className={`${styles["checkout__form-area"]} ${
                  !isInputValid.name
                    ? styles["checkout__form-area-invalid"]
                    : ""
                }`}
              >
                {/* <label htmlFor='name'>Name</label> */}
                <input
                  type='text'
                  id='name'
                  ref={nameInputRef}
                  placeholder='Name'
                ></input>
                {!isInputValid.name && <p>Please enter a valid name.</p>}
              </div>
              <div
                className={`${styles["checkout__form-area"]} ${
                  !isInputValid.phone
                    ? styles["checkout__form-area-invalid"]
                    : ""
                }`}
              >
                {/* <label htmlFor='phone'>Phone number</label> */}
                <input
                  type='text'
                  id='phone'
                  ref={phoneInputRef}
                  placeholder='Phone number'
                ></input>
                {!isInputValid.phone && (
                  <p>Please enter a valid phone number.</p>
                )}
              </div>
              <div
                className={`${styles["checkout__form-area"]} ${
                  !isInputValid.street
                    ? styles["checkout__form-area-invalid"]
                    : ""
                }`}
              >
                {/* <label htmlFor='street'>Street</label> */}
                <input
                  type='text'
                  id='street'
                  ref={streetInputRef}
                  placeholder='Street'
                ></input>
                {!isInputValid.street && <p>Please enter a valid street.</p>}
              </div>
              <div
                className={`${styles["checkout__form-area"]} ${
                  !isInputValid.city
                    ? styles["checkout__form-area-invalid"]
                    : ""
                }`}
              >
                {/* <label htmlFor='city'>City</label> */}
                <input
                  type='text'
                  id='city'
                  ref={cityInputRef}
                  placeholder='City'
                ></input>
                {!isInputValid.city && <p>Please enter a valid city.</p>}
              </div>
              <div
                className={`${styles["checkout__form-area"]} ${
                  !isInputValid.postalcode
                    ? styles["checkout__form-area-invalid"]
                    : ""
                }`}
              >
                {/* <label htmlFor='postalcode'>Postal Code</label> */}
                <input
                  type='text'
                  id='postalcode'
                  ref={postalcodeInputRef}
                  placeholder='Postal code'
                ></input>
                {!isInputValid.postalcode && (
                  <p>Please enter a valid postal code (5 characters long).</p>
                )}
              </div>
            </div>
            <div className={styles["checkout__button-container"]}>
              <motion.button
                type='button'
                onClick={props.onGoBackClick}
                className={styles["checkout__back-button"]}
                whileHover={{
                  borderColor: "#f8b602",
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                Go back
              </motion.button>
              <motion.button
                className={styles["checkout__confirm-button"]}
                whileHover={{
                  backgroundColor: "#333",
                  borderColor: "#333",
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                Confirm
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutForm;
