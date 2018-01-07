import { call, takeLatest, select, put } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
// import { getPriceFromApi } from '../sources/priceBoxSources';


function* coinPrice() {
  try {
    // var price = yield call(getPriceFromApi);
  } catch (error) {

  }
}

export function* coinPriceSaga() {
  yield takeLatest(FETCH_COIN_PRICE, coinPrice);
}

export default coinPriceSaga;
