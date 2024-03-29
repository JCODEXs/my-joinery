import { useRouter } from "next/router";
import styles from "./DealsSummary.module.css";
import Image from "next/image";
const DealsSummary = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/productos");
  };
  return (
    <div style={{ marginBottom: "2rem" }} className={styles.summary}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          background: "rgb(20,30,60,0.35)",
          width: "98%",
          position: "relative",
          fontSize: "1.2rem",
          borderRadius: "5px",
          justifyContent: "center",
          padding: "0.7rem",
          marginBottom: "0.5rem",
        }}
      >
        <p>
          Si está buscando muebles de alta calidad y diseño personalizado, no
          busque más allá de nuestra empresa. ¡Estamos ansiosos por trabajar con
          usted para crear muebles que complementen su hogar u oficina de la
          mejor manera posible!{" "}
        </p>
        <button onClick={() => handleClick()} className={styles.button}>
          Diseños
        </button>

        <p>
          Somos una empresa dedicada a la creación de muebles únicos y
          personalizados para nuestros clientes. Utilizamos materiales de alta
          calidad, como la madera y las resinas, para crear piezas duraderas y
          hermosas que complementarán cualquier espacio en su hogar u oficina.
          En nuestro taller, contamos con un equipo de diseñadores y artesanos
          altamente capacitados que trabajan juntos para crear muebles a medida
          que se adaptan perfectamente a sus necesidades y gustos. Nos
          enorgullece ofrecer una amplia variedad de diseños y estilos, desde lo
          moderno y contemporáneo hasta lo rústico y tradicional.
        </p>

        <div className={styles.resin} />
      </div>
    </div>
  );
};

export default DealsSummary;
