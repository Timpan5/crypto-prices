import React from 'react';
import { Provider } from 'react-redux';

import store from '../store/pricesStore';
import AppLayout from '../components/AppLayout';

const PricesApp = (props) => (
  <Provider store={store}>
    <AppLayout />
  </Provider>
);

export default PricesApp;
