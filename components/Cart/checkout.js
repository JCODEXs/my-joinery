import classes from "./checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isNotPostal = (value) => value.length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    state: true,
    postal: true,
    email: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const emailInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredState = stateInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredEmailIsValid =
      !isEmpty(enteredEmail) && enteredEmail.includes("@");
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredStateIsValid = !isEmpty(enteredState);
    const enteredPostalIsValid = !isNotPostal(enteredPostal);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      email: enteredEmailIsValid,
      city: enteredCityIsValid,
      state: enteredStateIsValid,
      postal: enteredPostalIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredEmailIsValid &&
      enteredCityIsValid &&
      enteredStateIsValid &&
      enteredPostalIsValid;

    if (!formIsValid) {
      return;
    }
    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      email: enteredEmail,
      postal: enteredPostal,
      city: enteredCity,
      state: enteredState,
    });
  };

  const emailControlClasses = `${classes.control} ${
    formInputsValidity.email ? "" : classes.invalid
  } `;
  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  } `;
  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  } `;
  const stateControlClasses = `${classes.control} ${
    formInputsValidity.state ? "" : classes.invalid
  } `;
  const postalControlClasses = `${classes.control} ${
    formInputsValidity.postal ? "" : classes.invalid
  } `;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          formInputsValidity.name ? "" : classes.invalid
        } `}
      >
        <label htmlFor="name"> your Name </label>
        <input type="text " id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Name is required o be valid</p>}
      </div>
      <div className={emailControlClasses}>
        <label htmlfor="email"> Your Email </label>
        <input type="text" id="email" ref={emailInputRef} />
        {!formInputsValidity.email && <p>Email is required o be valid</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlfor="street"> Your Address </label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Street is required o be valid</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlfor="postal"> Postal Code </label>
        <input type="text" id="postal" ref={postalInputRef} />
        {!formInputsValidity.postal && <p>Postal is required o be valid</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlfor="city"> City </label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>City is required o be valid</p>}
      </div>
      <div className={stateControlClasses}>
        <label htmlfor="state"> state </label>
        <input type="text" id="state" ref={stateInputRef} />
        {!formInputsValidity.state && <p>State is required o be valid</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onClose}>
          Cancel
        </button>
        <button className={"button"} onClick={props.OnOrder}>
          Confirm
        </button>
      </div>
    </form>
  );
};
export default Checkout;
