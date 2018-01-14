import { combineReducers } from 'redux';
import { fromJS, List, Map } from 'immutable';

import * as priceConstants from '../constants/pricesConstants';
import * as headerConstants from '../constants/headerConstants';

const MAX_CHART_DATA_POINTS = 25;

const initialPrices = fromJS({
  'BTC': [],
  'ETH': [],
});

const initialStoreState = new Map({
  currentCoin: 'BTC',
  prices: initialPrices,
});

function coinPriceUpdate(state, action) {
  return state.updateIn(['prices', action.coin], (list) =>
    list.size >= MAX_CHART_DATA_POINTS ? list.shift().push(action.pricesMap) : list.push(action.pricesMap));
}

function coinNameUpdate(state, action) {
  return state.update('currentCoin', () => action.coinName);
}

const rootReducer = (state = initialStoreState, action) => {
  switch (action.type) {
    case priceConstants.COIN_PRICE_UPDATE:
      return coinPriceUpdate(state, action);
    case headerConstants.COIN_NAME_UPDATE:
      return coinNameUpdate(state, action);
    default:
      return state;
  }
};

export default rootReducer;
