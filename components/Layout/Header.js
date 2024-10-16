import { Fragment, useEffect, useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
const Header = ({
  showCartHandler,
  showContact,
  isEnglish,
  contactRef,
  scrollToRef,
}) => {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(300);
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  const handleClickP = () => {
    router.push("/productos");
  };
  const handleClickC = () => {
    router.push("/contacto");
  };
  const [Language, setLanguage] = useState("English");
  console.log(router.pathname);
  useEffect(() => {
    if (isEnglish) {
      setLanguage("English");
    } else if (!isEnglish) {
      setLanguage("Español");
    }
  }, [isEnglish]);

  // const eLanguageHandler=useCallback(()=>{
  //   setLengua('Español')
  //   console.log(Lengua)
  // },[Lengua])

  const enLanguageHandler = (event) => {
    //event.preventDefault()
    // console.log(props);
    if (Language === "English") {
      handleLanguageFalse();
    } else if (Language === "Español") {
      handleLanguageTrue();
    }
  };
  useEffect(() => {
    function setDivHeight() {
      const div = document.querySelector("#my-div");
      const width = div.offsetWidth;
      const height = 1200 / width;
      setWidth(width);
      setHeight(height);
    }
    setDivHeight();
    window.addEventListener("resize", setDivHeight);
    return () => {
      window.removeEventListener("resize", setDivHeight);
    };
  }, []);

  useEffect(() => {
    const div = document.querySelector("#my-div");
    div.style.setProperty("height", `${height}px`);
  }, [height]);
  return (
    <Fragment>
      <div
        id="header"
        style={{
          position: "fixed",
          width: "100%",
          top: 0,
          left: 0,
          backgroundImage: 'url("/herramientas2.jpg")',
          height: "88px",
          // width: "auto",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "start",
          alignContent: "center",
          zIndex: 30,
          marginBottom: "0.5rem",
        }}
      >
        <div id="my-image">
          <Image
            onClick={() => handleClick()}
            src="/MadeIn.png"
            alt="l Logo"
            width={117}
            height={113}
            style={{
              boxShadow: "1px 10px 20px rgba(0, 0, 0, 0.2)", // Add a shadow
              transform: " rotateZ(-10deg) ", // Rotate the image
              perspective: "500px", // Set perspective,
              borderRadius: "50%",
              borderBlockColor: "black",
              borderBlockEndWidth: "3px",
              borderBlockEndStyle: "dotted",
              marginTop: "-1.25rem",
              zIndex: 3,
            }}
          />
        </div>
        <div id="my-div">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              position: "sticky",
              zIndex: 2,
              alignItems: "center",
              justifyContent: "flex-end",

              margin: "0.5rem",
            }}
          >
            {router.pathname !== "/productos" ? (
              <button onClick={() => handleClickP()} className={classes.button}>
                Nuestros <br /> Productos
              </button>
            ) : (
              <button onClick={() => handleClick()} className={classes.button}>
                Inicio
              </button>
            )}
            {/* <button className={classes.button}>Talleres</button> */}
            {router.pathname !== "/contacto" ? (
              <button onClick={() => handleClickC()} className={classes.button}>
                Contactanos
              </button>
            ) : (
              <button onClick={() => handleClick()} className={classes.button}>
                Inicio
              </button>
            )}

            <HeaderCartButton onClick={() => showCartHandler()} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
