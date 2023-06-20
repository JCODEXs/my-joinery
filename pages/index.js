import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Gallery from "../components/Gallery/secondGallery";
import DealsSummary from "../components/Deals/DealsSummary";
import AvailableDeals from "../components/Deals/AvailableDeals";
import Header from "../components/Layout/Header";

export default function Home() {
  const [images, setImages] = useState();
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.error(error));
  }, []);
  console.log(images);
  return (
    <div className={styles.container}>
      <Head>
        <title>Maderafi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={styles.main}
        style={{ backgroundColor: "#30E7FF", zIndex: "-20" }}
      >
        <Header />
        <div>
          <h1 className={styles.title}>
            <div
              style={{
                zIndex: "5",
                marginBottom: "10rem",
                padding: "6rem",
                fontSize: "2.7rem",
                color: "#078FA1",
                marginTop: "4rem",
              }}
            >
              Bienvenidos a Maderafi diseño y fabricación de muebles en acero y
              madera !
            </div>
            {/* // <Image src="/MadeIn.png" alt="Vercel Logo" width={300} height={190} /> */}
          </h1>
        </div>

        {/* <DealsSummary /> */}
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
            style={{ borderRadius: "40%" }}
          />
        </span>
      </footer>
    </div>
  );
}
