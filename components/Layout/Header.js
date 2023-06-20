import { Fragment, useEffect, useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = (props) => {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(300);
  const router = useRouter();

  const [Language, setLanguage] = useState("English");

  useEffect(() => {
    if (props.isEnglish) {
      setLanguage("English");
    } else if (!props.isEnglish) {
      setLanguage("Español");
    }
  }, [props.isEnglish]);

  // const eLanguageHandler=useCallback(()=>{
  //   setLengua('Español')
  //   console.log(Lengua)
  // },[Lengua])

  const enLanguageHandler = (event) => {
    //event.preventDefault()
    console.log(props);
    if (Language === "English") {
      props.handleLanguageFalse();
    } else if (Language === "Español") {
      props.handleLanguageTrue();
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
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div id="my-image">
          <Image
            src="/MadeIn.png"
            alt="Vercel Logo"
            width={300}
            height={250}
            style={{ borderRadius: "45%", margin: "2rem" }}
          />
        </div>
        <div id="my-div">
          <div
            style={{
              borderRadius: "50%",
              minWidth: "10rem",
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              position: "sticky",
              zIndex: 2,
            }}
          >
            <button
              onClick={() => {
                router.push("/");
              }}
              className={classes.button}
            >
              Inicio
            </button>
            <button
              onClick={() => {
                router.push("/productos");
              }}
              className={classes.button}
            >
              Productos
            </button>
            <button
              onClick={() => {
                router.push("/talleres");
              }}
              className={classes.button}
            >
              Talleres
            </button>
            <button
              onClick={() => {
                router.push("/nosotros");
              }}
              className={classes.button}
            >
              Contacto
            </button>
          </div>
        </div>
        <div className={classes["main-image"]}>
          <Image
            src={"/herramientas2.jpg"}
            width={800}
            height={450}
            alt="goods and services"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
