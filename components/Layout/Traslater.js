import React, { useState } from "react";
import App from "../../App";
import AppE from "../../AppE";
import Header from "./Header";
import Cart from "../Cart/Cart";
import CartProvider from "../../store/CartProvider";

 const Traslater = () => {
     const [cartIsShown, setCartIsShown] = useState(false);
     const [state,setState]=useState(true)
    let contentLang;
    const isEnglish = state.isEnglish;


  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  

       if (isEnglish) {
        contentLang = <AppE/>;
      } else {
        contentLang = <App/>;
      }
 
    
    const handleLanguageTrue = () => {
        setState({isEnglish: true});
    }
    
    const handleLanguageFalse=()=> {
    setState({isEnglish: false});
    }

      
      return (
        <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
        <div>
          <Header onShowCart={showCartHandler} isEnglish={isEnglish} handleLanguageFalse={handleLanguageFalse} handleLanguageTrue={handleLanguageTrue}/>
          {contentLang}
        </div>
        </CartProvider>
      );
    }
  
    export default Traslater;