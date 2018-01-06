import React from 'react';
import { Provider } from 'react-redux';

import store from '../store/pricesStore';
import PricesContainer from '../containers/PricesContainer';

const PricesApp = (props) => (
  <Provider store={store}>
    <PricesContainer />
  </Provider>
);

export default PricesApp;
