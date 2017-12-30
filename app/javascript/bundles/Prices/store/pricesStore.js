import { createStore } from 'redux';
import pricesReducer from '../reducers/pricesReducer';

const configureStore = (railsProps) => (
  createStore(pricesReducer, railsProps)
);

export default configureStore;
