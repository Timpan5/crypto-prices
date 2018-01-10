import { combineReducers } from 'redux';
import { fromJS, List, Map } from 'immutable';

import * as priceConstants from '../constants/pricesConstants';

const maxChartDataPoints = 25;

const initialPrices = fromJS({
  'BTC': [],
});

const initialStoreState = new Map({
  prices: initialPrices,
});

function coinPriceUpdate(state, action) {
  return state.updateIn(['prices', action.coin], (list) =>
    list.size >= maxChartDataPoints ? list.shift().push(action.price) : list.push(action.price));
}

const display = (state = initialStoreState, action) => {
  switch (action.type) {
    // case priceConstants.COIN_NAME_UPDATE:
    //   return state.prices.update('name', () => action.text);
    case priceConstants.COIN_PRICE_UPDATE:
      return coinPriceUpdate(state, action);
    default:
      return state;
  }
};

const rootReducer = combineReducers({ display });

export default rootReducer;
