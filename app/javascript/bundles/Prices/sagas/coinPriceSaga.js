import { call, takeLatest, select, put } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
import { getPriceFromBitfinex, getPriceFromBittrex } from '../sources/priceSources';
import { coinPriceUpdate } from '../actions/pricesActionCreators';


function* coinPrice(action) {
  try {
    const bitfinex = yield call(getPriceFromBitfinex, 'tBTCUSD');
    const bitfinexPrice = bitfinex.data[6];

    const bittrex = yield call(getPriceFromBittrex);
    const bittrexPrice = bittrex.data.result.Last;

    yield put(coinPriceUpdate(action.coin, 'Bitfinex', bitfinexPrice));
    yield put(coinPriceUpdate(action.coin, 'Bittrex', bittrexPrice));

  } catch (error) {
    console.log('coinPriceSaga: ', error);
  }
}

export function* coinPriceSaga() {
  yield takeLatest(FETCH_COIN_PRICE, coinPrice);
}

export default coinPriceSaga;
