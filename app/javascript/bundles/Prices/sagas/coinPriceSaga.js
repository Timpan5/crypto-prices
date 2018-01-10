import { call, takeLatest, select, put } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
import { getPriceFromBitfinex, getPriceFromBittrex } from '../sources/priceSources';
import { coinPriceUpdate } from '../actions/pricesActionCreators';


function* coinPrice(action) {
  try {
    // const ticker = yield call(getPriceFromBitfinex, 'tBTCUSD');
    // const price = ticker.data[6];

    const ticker = yield call(getPriceFromBittrex);
    const price = ticker.data.result.Last;

    yield put(coinPriceUpdate(action.coin, price));

  } catch (error) {
    console.log('coinPriceSaga: ', error);
  }
}

export function* coinPriceSaga() {
  yield takeLatest(FETCH_COIN_PRICE, coinPrice);
}

export default coinPriceSaga;
