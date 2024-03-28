import { useState } from "react";

import AvailableDeals from "../../components/Deals/AvailableDeals";
import HeaderCartButton from "../../components/Layout/HeaderCartButton";
import Cart from "../../components/Cart/Cart";

const Productos = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <HeaderCartButton onClick={showCartHandler} />
      <Cart />
      {/* <AvailableDeals /> */}
      <div id="overlays">hg</div>
    </div>
  );
};
export default Productos;
