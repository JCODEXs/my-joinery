"use client";
import { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import StripeCheckout from "../stripe/stripecheckout";

const Cart = ({ hideCartHandler }) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);

  const totalAmount = cartCtx.totalAmount;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          description={item.description}
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={classes.actions}>
      <button
        className={classes["button--alt"]}
        onClick={() => {
          hideCartHandler();
        }}
      >
        cerrar
      </button>
    </div>
  );

  const contactInfo = (
    <div className={classes.contactInfo}>
      <h2> Rafael Vega </h2>

      <p>(+56) 995 375 560</p>
    </div>
  );

  return (
    <Modal onClose={hideCartHandler}>
      {modalActions}
      {cartItems}
      <div className={classes.total}>
        {"Total: $ "}
        {totalAmount}
        {/* {contactInfo} */}
      </div>
      <StripeCheckout items={cartCtx.items} total={totalAmount} />
    </Modal>
  );
};

export default Cart;
