import DealsSummary from "../components/Deals/DealsSummary";
import Header from "../components/Layout/Header";
import styles from "../styles/Home.module.css";

export default function about() {
  return (
    <div
      className={styles.container}
      style={{ background: "rgb(69,70,50,0.6)" }}
    >
      <Header />
      <div style={{ display: "flex" }}>
        <DealsSummary />
      </div>
    </div>
  );
}
