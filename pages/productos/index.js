import { useEffect, useState } from "react";
import Header from "../../components/Layout/Header";
import AvailableDeals from "../../components/Deals/AvailableDeals";
import HeaderCartButton from "../../components/Layout/HeaderCartButton";
import Cart from "../../components/Cart/Cart";
import CartProvider from "../../store/CartProvider";

const Productos = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.error(error));
  }, []);
  // console.log(images);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div style={{ background: "#A6774E" }}>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Header showContact={false} showCartHandler={showCartHandler} />
      {/* <HeaderCartButton /> */}
      <div id="overlays"></div>
      <AvailableDeals images={images} />
    </div>
  );
};
export default Productos;
