import { useContext, useEffect, useState } from "react";
import DealItemForm from "./DealItemForm";

import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
import Image from "next/image";

const DealItem = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(props.src);
  const price = `$${props.price}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Agregar un event listener para detectar cambios en el tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const imageSize = windowWidth < 415 ? 99 : 137;
  const showDescription = windowWidth < 415 ? false : true;
  return (
    <li className={classes.meal}>
      <div className={classes.dealAtributes}>
        {props.src && (
          <div className={classes.image}>
            <Image
              src={props.src}
              height={imageSize}
              width={imageSize}
              alt="wooditem"
            />
          </div>
        )}
        <div className={classes.dealDetails}>
          <div>{props.name}</div>
          {showDescription && (
            <div className={classes.description}>{props.description}</div>
          )}{" "}
          <div className={classes.price}>{price}</div>
        </div>
      </div>
      <div>
        <DealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default DealItem;
