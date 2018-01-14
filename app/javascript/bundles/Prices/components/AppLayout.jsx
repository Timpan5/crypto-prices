import React from 'react';
import PricesContainer from '../containers/PricesContainer';
import HeaderContainer from '../containers/HeaderContainer';

function AppLayout() {
  return (
    <div>
      <HeaderContainer />
      <PricesContainer />
    </div>
  );
}

export default AppLayout;
