import { Fragment, useEffect, useState} from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import Image from "next/image";



const Header = (props) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  

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

  useEffect(() => {
    function setDivHeight() {
    const div = document.querySelector('#my-div');
    const width = div.offsetWidth; 
    const height = 100*1200 / width;
   
    setWidth(width);
    setHeight(height);}
    setDivHeight();

    window.addEventListener('resize', setDivHeight); 
  
    return () => {
      window.removeEventListener('resize', setDivHeight);
    }

  }, []);

  useEffect(() => {
    const div = document.querySelector('#my-div'); 
    div.style.setProperty('height', `${height}px`); 
   
    }, [height]);

 
  return (
    <Fragment>
      <header id="my-div" className={classes.header}>
        <div style={{borderRadius:"50%",zIndex:"11"}}>
          <Image src="/MadeIn.png" alt="Vercel Logo" width={200} height={140} style={{borderRadius:"50%",zIndex:"9"}} />
        </div>
      
          <div style={{borderRadius:"50%",minWidth:"10rem",maxWidth:"45rem",display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
            
              <button className={classes.button}   > Inicio </button>
              <button className={classes.button}   > Productos </button>
              <button className={classes.button}   > Talleres </button>
              <button className={classes.button}   > Contacto </button>
          </div>
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
