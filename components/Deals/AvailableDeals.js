import { useEffect, useState } from "react";

import Card from "../UI/Card";
import DealItem from "./DealItem/DealItem";
import classes from "./AvailableDeals.module.css";



const AvailableDeals = () => {
  const [Deals, setDeals] = useState([]);

useEffect(()=>{
  setDeals([{
    id:1,
    name:'Repisas',
    description:'Hechas en madera',
    price:500000,
  },
  {
    id:2,
    name:"Cama",
    description:'"Hechas en madera',
    price:1500000,
  }

])
},[])


  const DealsList = Deals.map((deal) => (
    <DealItem
      key={deal.id}
      id={deal.id}
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
