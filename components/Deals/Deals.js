import { Fragment } from 'react';

import DealsSummary from './DealsSummary';
import AvailableDeals from './AvailableDeals';

const Meals = () => {
  return (
    <Fragment>
      <DealsSummary />
      <AvailableDeals />
    </Fragment>
  );
};

export default Meals;
