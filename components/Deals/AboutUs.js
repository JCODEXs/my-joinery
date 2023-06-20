import Image from "next/image";
import classes from "./DealsSummary.module.css";

const AboutUs = () => {
  return (
    <section className={classes.summary}>
      <h2> Lo que Hacemos por Usted</h2>
      <p>
      Registros financieros organizados que le ayudarán a saber dónde está invertido su dinero
         para que puedas sacarle el máximo partido!
      </p>
      <p>
      Cuentas por pagar/por cobrar,  mantenemos un registro de todo su dinero que ingresa 
        para que durante la temporada de impuestos pueda relajarse y recuperar ese dinero con
        deducibles! Con nuestros sistemas, también podemos ayudar a garantizar que todas las facturas sean
        pagado antes de su vencimiento, nunca vencido!
      </p>
      <p>Contactanos para Mayor informacion</p>
      <a width = '50px'  aria-label="Chat on WhatsApp" href="https://wa.me/17076139802"> <Image alt="Chat on WhatsApp" src="WhatsAppButtonGreenLarge.svg" /> </a>
    </section>
  );
};

export default AboutUs;