import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

import { COIN_NAME_UPDATE } from '../constants/pricesConstants';

const initialStoreState = fromJS({
  name: '',
});

const name = (state = initialStoreState, action) => {
  switch (action.type) {
    case COIN_NAME_UPDATE:
      return state.set('name', action.text);
    default:
      return state;
  }
};

const pricesReducer = combineReducers({ name });

export default pricesReducer;
