import { combineReducers } from 'redux';
import { fromJS, List, Map } from 'immutable';

import * as priceConstants from '../constants/pricesConstants';

const initialPrices = fromJS({
  'BTC': [],
});

const initialStoreState = new Map({
  prices: initialPrices,
});

const display = (state = initialStoreState, action) => {
  switch (action.type) {
    // case priceConstants.COIN_NAME_UPDATE:
    //   return state.prices.update('name', () => action.text);
    case priceConstants.COIN_PRICE_UPDATE:
      return state.updateIn(['prices', action.coin], (list) => list.push(action.price));
    default:
      return state;
  }
};

const rootReducer = combineReducers({ display });

export default rootReducer;
