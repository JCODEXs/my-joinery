import "../styles/globals.css";
import CartProvider from "../store/CartProvider";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Layout/Header";
import { useRef, useState } from "react";
import Cart from "../components/Cart/Cart";
function MyApp({ Component, pageProps }) {
  const [cartIsShown, setCartIsShown] = useState(false);
  const contactFormRef = useRef(null);
  const [formRef, setFormRef] = useState(null);
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  const scrollToRef = () => {
    formRef?.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <CartProvider>
      <Head>
        <title>Maderafi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ marginBottom: "0.5rem" }}>
        <Header
          showContact={true}
          showCartHandler={showCartHandler}
          cartIsShown={cartIsShown}
          scrollToRef={scrollToRef}
        />
      </div>
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <Component {...pageProps} setFormRef={setFormRef} />

      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image
            src="/ColorMetta.png"
            alt="Vercel Logo"
            width={84}
            height={100}
            style={{ borderRadius: "50%" }}
          />
        </span>
        <span className={styles.logo}>
          <Image
            src="/ColorMetta.png"
            alt="Vercel Logo"
            width={84}
            height={100}
            style={{ borderRadius: "50%" }}
          />
        </span>
      </footer>
    </CartProvider>
  );
}

export default MyApp;
