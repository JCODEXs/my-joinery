import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Gallery from "../components/Gallery/secondGallery";
import DealsSummary from "../components/Deals/DealsSummary";
import AvailableDeals from "../components/Deals/AvailableDeals";
import Background from "../components/3dview/viewPort";

export default function Home({ setFormRef }) {
  const [images, setImages] = useState();
  console.log(setFormRef);

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setImages(data.images))
      .catch((error) => console.error(error));
  }, []);
  // console.log(images);

  return (
    <div className={styles.container}>
      <main
        className={styles.main}
        style={{ backgroundColor: "#BFAE99", zIndex: "-20" }}
      >
        {/* {cartIsShown && <Cart hideCartHandler={hideCartHandler} />} */}
        <div style={{ marginTop: "99px" }}>
          <div className={styles.callToaction}>
            Diseño y fabricación de muebles de madera y acero!{" "}
          </div>
          <div
            className={styles.animateEntrance}
            style={{
              zIndex: "3",
              padding: "2.1rem",
              // padding: "2rem",
              fontSize: "1.2rem",
              color: "#593122",
            }}
          >
            {images && <Gallery images={images} />}
          </div>
          {/* // <Image src="/MadeIn.png" alt="Vercel Logo" width={300} height={190} /> */}
        </div>
        <DealsSummary />
        {
          <div>
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
