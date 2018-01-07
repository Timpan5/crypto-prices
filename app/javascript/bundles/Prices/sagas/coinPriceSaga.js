import { call, takeLatest, select, put } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
import { getPriceFromApi } from '../sources/priceBoxSources';
import { coinPriceUpdate } from '../actions/pricesActionCreators';


function* coinPrice(action) {
  try {
    const ticker = yield call(getPriceFromApi);
    const price = ticker.data[6];

    yield put(coinPriceUpdate(action.coin, price));

  } catch (error) {
    console.log('coinPriceSaga: ', error);
  }
}

export function* coinPriceSaga() {
  yield takeLatest(FETCH_COIN_PRICE, coinPrice);
}

export default coinPriceSaga;
