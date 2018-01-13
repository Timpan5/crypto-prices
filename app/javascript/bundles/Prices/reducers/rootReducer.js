import { combineReducers } from 'redux';
import { fromJS, List, Map } from 'immutable';

import * as priceConstants from '../constants/pricesConstants';

const MAX_CHART_DATA_POINTS = 25;

const initialPrices = fromJS({
  'BTC': [],
});

const initialStoreState = new Map({
  prices: initialPrices,
});

function coinPriceUpdate(state, action) {
  return state.updateIn(['prices', action.coin], (list) =>
    list.size >= MAX_CHART_DATA_POINTS ? list.shift().push(action.pricesMap) : list.push(action.pricesMap));
}

const display = (state = initialStoreState, action) => {
  switch (action.type) {
    case priceConstants.COIN_PRICE_UPDATE:
      return coinPriceUpdate(state, action);
    default:
      return state;
  }
};

const rootReducer = combineReducers({ display });

export default rootReducer;
