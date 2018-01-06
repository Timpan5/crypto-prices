import { all } from 'redux-saga/effects';
import coinPriceSaga from './coinPriceSaga';

export default function* rootSaga() {
  yield all([
    coinPriceSaga(),
  ]);
}
