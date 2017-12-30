import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

import { COIN_NAME_UPDATE } from '../constants/pricesConstants';

const initialPrices = fromJS({
  name: 'BTC',
});

const initialStoreState = fromJS({
  prices: initialPrices,
});

const display = (state = initialStoreState, action) => {
  switch (action.type) {
    case COIN_NAME_UPDATE:
      return state.update('name', () => action.text);
    default:
      return state;
  }
};

const rootReducer = combineReducers({ display });

export default rootReducer;
