import "../styles/globals.css";
import CartProvider from "../store/CartProvider";
import styles from "../styles/Home.module.css";
import Image from "next/image";
function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />

      <footer className={styles.footer}>
        Powered by{" "}
        <span className={styles.logo}>
          <Image
            src="/ColorMetta.png"
            alt="Vercel Logo"
            width={84}
            height={100}
          />
        </span>
      </footer>
    </CartProvider>
  );
}

export default MyApp;
