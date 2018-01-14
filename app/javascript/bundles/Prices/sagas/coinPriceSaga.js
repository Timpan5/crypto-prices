import { call, takeLatest, select, put } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
import { getPriceFromBitfinex, getPriceFromBittrex, getPriceFromPoloniex, getPriceFromHitbtc, getPriceFromBinance }
  from '../sources/priceSources';
import { coinPriceUpdate } from '../actions/pricesActionCreators';
import { Map } from 'immutable';

function* coinPrice(action) {
  try {
    const bitfinex = yield call(getPriceFromBitfinex, 'tBTCUSD');
    const bitfinexPrice = Math.round(bitfinex.data[6]);

    const bittrex = yield call(getPriceFromBittrex, 'USDT-BTC');
    const bittrexPrice = Math.round(bittrex.data.result.Last);

    const poloniex = yield call(getPriceFromPoloniex);
    const poloniexPrice = Math.round(poloniex.data.USDT_BTC.last);

    const hitbtc = yield call(getPriceFromHitbtc, 'BTCUSD');
    const hitbtcPrice = Math.round(hitbtc.data.last);

    const binance = yield call(getPriceFromBinance);
    const binancePrice = Math.round(binance.data[12].price);

    const pricesMap = new Map({
      Bitfinex: bitfinexPrice,
      Bittrex: bittrexPrice,
      Poloniex: poloniexPrice,
      Hitbtc: hitbtcPrice,
      Binance: binancePrice,
    })

    yield put(coinPriceUpdate(action.coin, pricesMap));

  } catch (error) {
    console.log('coinPriceSaga error: ', error);
  }
}

export function* coinPriceSaga() {
  yield takeLatest(FETCH_COIN_PRICE, coinPrice);
}

export default coinPriceSaga;
