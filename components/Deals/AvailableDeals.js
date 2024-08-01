import { useEffect, useState } from "react";

import Card from "../UI/Card";
import DealItem from "./DealItem/DealItem";
import classes from "./AvailableDeals.module.css";

const AvailableDeals = ({ images }) => {
  const [Deals, setDeals] = useState([]);

  useEffect(() => {
    setDeals([
      {
        id: 1,
        name: "Repisas",
        description: "Hechas en madera",
        price: 750000,
      },
      {
        id: 2,
        name: "Cuadro tallado",
        description: "madera de pino pintura epoxy",
        price: 50000,
      },
      {
        id: 3,
        name: "Mesa",
        description: "madera de cedro enchapado de acero inoxidable",
        price: 120000,
      },
      {
        id: 4,
        name: "escritorio",
        description: "Hechas en madera amarilla ",
        price: 275000,
      },
      {
        id: 5,
        name: "escritorio",
        description: "Hechas en madera amarilla ",
        price: 275000,
      },
      {
        id: 6,
        name: "escritorio",
        description: "Hechas en madera amarilla ",
        price: 275000,
      },
    ]);
  }, []);

  const DealsList = Deals.map((deal) => (
    <DealItem
      key={deal.id}
      id={deal.id}
      src={images?.[deal.id]}
      name={deal.name}
      description={deal.description}
      price={deal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{DealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableDeals;
