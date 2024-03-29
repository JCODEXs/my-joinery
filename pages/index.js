import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState, useRef } from "react";
import Gallery from "../components/Gallery/secondGallery";
import DealsSummary from "../components/Deals/DealsSummary";
import AvailableDeals from "../components/Deals/AvailableDeals";
import Header from "../components/Layout/Header";
import Background from "../components/3dview/viewPort";
import BackgroundSoft from "../components/3dview/backgroundSoft";
import ContactForm from "../components/contact-form/contactForm";

export default function Home() {
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.error(error));
  }, []);
  // console.log(images);
  const servicesRef = useRef(null);

  const scrollToRef = () => {
    servicesRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
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
        <Header contactRef={scrollToRef} />
        <div>
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
        <div
          style={{
            height: "580px",
            display: "flex",
            position: "relative",
            width: "100%",
            // marginBottom: "1rem",
          }}
        >
          <BackgroundSoft />
          <div
            style={{
              display: "flex",
              width: "98%",
              maxWidth: "65rem",
              zIndex: 20,
              position: "absolute",
              fontSize: "1rem",
              top: 10,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              padding: "23px",
              borderRadius: "10px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            ref={servicesRef}
          >
            <ContactForm />
          </div>
        </div>
        {
          <div>
            {/* <pre>{JSON.stringify(images,null,2)}</pre> */}
            {images && <Gallery images={images} />}
            {false && <AvailableDeals />}
          </div>
        }
      </main>

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
      <div id="overlays"></div>
    </div>
  );
}
