import { useEffect, useState } from "react";
import AvailableDeals from "../../components/Deals/AvailableDeals";

const Productos = () => {
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.error(error));
  }, []);
  // console.log(images);

  return (
    <div style={{ background: "#A6774E", marginBottom: "1rem" }}>
      {/* {cartIsShown && <Cart hideCartHandler={hideCartHandler} />} */}
      {/* <Header showContact={false} showCartHandler={showCartHandler} /> */}
      {/* <HeaderCartButton /> */}
      <div id="overlays"></div>
      <AvailableDeals images={images} />
    </div>
  );
};
export default Productos;
