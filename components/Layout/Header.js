import { Fragment, useEffect, useState} from "react";
 import HeaderCartButton from "./HeaderCartButton";
import backImage from "../../assets/growmoney.jpg";
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
        <h1>Book Keeping</h1> 

           <button className={classes.button}  onClick ={enLanguageHandler} > {Language} </button> 
          
         {/* <Menubar className={classes.menubar}/> */}
        <HeaderCartButton onClick={props.onShowCart} Lengua={Language} />

      </header>

           <div className={classes["main-image"]}>
                <Image src={backImage} alt="goods and services" />
          </div>

    
    
    </Fragment>
  );
};

export default Header;
