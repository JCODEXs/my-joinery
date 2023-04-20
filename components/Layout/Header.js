import { Fragment, useEffect, useState} from "react";
 import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import Image from "next/image";



const Header = (props) => {
 

   const [Language,setLanguage] = useState('English')


useEffect(()=>{
  
  if (props.isEnglish){
    setLanguage('English')
  }
  else if (!props.isEnglish){
    setLanguage('Español')
  }
},[props.isEnglish]
  )

  // const eLanguageHandler=useCallback(()=>{
  //   setLengua('Español')
  //   console.log(Lengua)
  // },[Lengua])




  const enLanguageHandler =(event)=>{
     //event.preventDefault()
      console.log(props)
      if (Language==='English')
     { 
      props.handleLanguageFalse()
     
      }
      else if(Language==='Español'){
       props.handleLanguageTrue()
     
      }
   
  }
  

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>   <Image src="/MadeIn.png" alt="Vercel Logo" width={350} height={210} style={{borderRadius:"50%"}} /></h1> 
        <button className={classes.button}   > Inicio </button> 
        <button className={classes.button}   > Productos </button> 
        <button className={classes.button}   > Talleres </button> 
        <button className={classes.button}   > Contacto </button> 

           {/* <button className={classes.button}  onClick ={enLanguageHandler} > {Language} </button> 
           */}
         {/* <Menubar className={classes.menubar}/> */}
        {/* <HeaderCartButton onClick={props.onShowCart} Lengua={Language} /> */}

      </header>

           <div className={classes["main-image"]}>
                <Image src={"/herramientas2.jpg"} width={800} height={450}alt="goods and services" />
          </div>

    
    
    </Fragment>
  );
};

export default Header;
