import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Gallery from "../components/Gallery/secondGallery";
import DealsSummary from "../components/Deals/DealsSummary";
import AvailableDeals from "../components/Deals/AvailableDeals";
import Header from "../components/Layout/Header";
import Background from "../components/3dview/viewPort";
import BackgroundSoft from "../components/3dview/backgroundSoft";
import ContactForm from "../components/contact-form/contactForm";
import ComposedContactForm from "../components/contact-form/composedContactForm";
import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";

export default function Home() {
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.error(error));
  }, []);
  // console.log(images);
  const [formRef, setFormRef] = useState(null);

  const scrollToRef = () => {
    formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Maderafi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={styles.main}
        style={{ backgroundColor: "#BFAE99", zIndex: "-20" }}
      >
        <Header
          showCartHandler={showCartHandler}
          showContact={true}
          contactRef={scrollToRef}
        />
        {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
        <div style={{ marginTop: "99px" }}>
          <div className={styles.callToaction}>
            Diseño y fabricación de muebles de madera y acero!{" "}
          </div>
          <div
            style={{
              zIndex: "3",
              marginBottom: "-2.1rem",
              // padding: "2rem",
              fontSize: "1.4rem",
              color: "#593122",
            }}
          >
            <Background />
          </div>
          {/* // <Image src="/MadeIn.png" alt="Vercel Logo" width={300} height={190} /> */}
        </div>
        <DealsSummary />
        <ComposedContactForm setFormRef={setFormRef} />
        {
          <div>
            {/* <pre>{JSON.stringify(images,null,2)}</pre> */}
            {images && <Gallery images={images} />}
            {false && <AvailableDeals />}
          </div>
        }
        <a
          style={{
            position: "fixed",
            bottom: "1.2rem",
            right: "1.7rem",
            zIndex: 100,
          }}
          target="_blank"
          rel="noopener noreferrer"
          width="50px"
          aria-label="Chat on WhatsApp"
          href="https://wa.me/56995375560"
        >
          {" "}
          <Image
            alt="Chat on WhatsApp"
            src="/linechat.png"
            width={60}
            height={60}
          />{" "}
        </a>
        ;
      </main>

      <div id="overlays"></div>
    </div>
  );
}
