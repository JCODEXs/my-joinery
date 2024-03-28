import { Fragment, useEffect, useState } from "react";
import { Fragment, useEffect, useState } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import Image from "next/image";

const Header = (props) => {
  const [width, setWidth] = useState(600);
  const [height, setHeight] = useState(300);

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
        id="header"
        style={{
          backgroundImage: 'url("/herramientas2.jpg")',
          height: "167px",
          width: "auto",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
          alignItems: "start",
          alignContent: "center",
        }}
      >
        <div id="my-image">
          <Image
            src="/MadeIn.png"
            alt="Vercel Logo"
            width={150}
            height={130}
            style={{ borderRadius: "45%", margin: "0.1rem", zIndex: 3 }}
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
            }}
          >
            <button className={classes.button}>Inicio</button>
            <button className={classes.button}>Productos</button>
            <button className={classes.button}>Talleres</button>
            <button className={classes.button}>Contacto</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
