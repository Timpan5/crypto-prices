import { call, takeLatest, select, put } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
import { getPriceFromBitfinex, getPriceFromBittrex } from '../sources/priceSources';
import { coinPriceUpdate } from '../actions/pricesActionCreators';
import { Map, List } from 'immutable';

function* coinPrice(action) {
  try {
    const bitfinex = yield call(getPriceFromBitfinex, 'tBTCUSD');
    const bitfinexPrice = Math.round(bitfinex.data[6]);

    const bittrex = yield call(getPriceFromBittrex, 'USDT-BTC');
    const bittrexPrice = Math.round(bittrex.data.result.Last);

    const pricesMap = new Map({
      Bitfinex: bitfinexPrice,
      Bittrex: bittrexPrice,
    })

    yield put(coinPriceUpdate(action.coin, pricesMap));

  } catch (error) {
    console.log('coinPriceSaga: ', error);
  }
}

export function* coinPriceSaga() {
  yield takeLatest(FETCH_COIN_PRICE, coinPrice);
}

export default coinPriceSaga;
