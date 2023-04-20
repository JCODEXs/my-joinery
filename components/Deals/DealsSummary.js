import classes from "./DealsSummary.module.css";
import Image from "next/image";

const DealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2> Bienvenidos a Maderafi</h2>
      <Image src="/MadeIn.png" alt="Vercel Logo" width={300} height={190} />
      <div style={{background:"rgb(20,30,60,0.8)",width:"45rem",position:"relative",fontSize:"1.2rem" }}>
      Bienvenidos a nuestra página web de diseño y fabricación de muebles de madera y resinas!

Somos una empresa dedicada a la creación de muebles únicos y personalizados para nuestros clientes. Utilizamos materiales de alta calidad, como la madera y las resinas, para crear piezas duraderas y hermosas que complementarán cualquier espacio en su hogar u oficina.

En nuestro taller, contamos con un equipo de diseñadores y artesanos altamente capacitados que trabajan juntos para crear muebles a medida que se adaptan perfectamente a sus necesidades y gustos. Nos enorgullece ofrecer una amplia variedad de diseños y estilos, desde lo moderno y contemporáneo hasta lo rústico y tradicional.

En nuestra página web, encontrará una galería de fotos de algunos de nuestros trabajos previos, lo que le dará una idea de lo que podemos hacer por usted. Además, puede ponerse en contacto con nosotros para discutir sus ideas y solicitar un presupuesto personalizado.

En definitiva, si está buscando muebles de alta calidad y diseño personalizado, no busque más allá de nuestra empresa. ¡Estamos ansiosos por trabajar con usted para crear muebles que complementen su hogar u oficina de la mejor manera posible!
      </div>
      <p>chatea con nosotros en Wassap!!</p>
      <div>
    <a width = '50px'  aria-label="Chat on WhatsApp" href="https://wa.me/56995375560"> <Image alt="Chat on WhatsApp" src="/WhatsAppButtonGreenLarge.svg" width={170} height={80}/> </a>
    </div>
    </section>
  );
};

export default DealsSummary;
