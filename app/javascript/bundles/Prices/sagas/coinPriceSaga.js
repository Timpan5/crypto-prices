import { call, takeLatest, select, put } from 'redux-saga/effects';
import { FETCH_COIN_PRICE } from '../constants/pricesConstants';
import { getPriceFromBitfinex, getPriceFromBittrex, getPriceFromPoloniex, getPriceFromHitbtc, getPriceFromBinance }
  from '../sources/priceSources';
import { coinPriceUpdate } from '../actions/pricesActionCreators';
import { Map } from 'immutable';
import { bitcoinTickers, ethereumTickers } from '../constants/tickerConstants';
import { selectCurrentCoin } from '../selectors/coin';

function chooseTicker(coin) {
  switch (coin) {
    case 'BTC':
      return bitcoinTickers;
    case 'ETH':
      return ethereumTickers;
    default:
      return bitcoinTickers;
  }
}

function* coinPrice(action) {
  try {
    const currentCoin = yield select(selectCurrentCoin);
    const currentTicker = chooseTicker(currentCoin);

    const bitfinex = yield call(getPriceFromBitfinex, currentTicker.get('Bitfinex'));
    const bitfinexPrice = Math.round(bitfinex.data[6]);

    const bittrex = yield call(getPriceFromBittrex, currentTicker.get('Bittrex'));
    const bittrexPrice = Math.round(bittrex.data.result.Last);

    const poloniex = yield call(getPriceFromPoloniex);
    const poloniexPrice = Math.round(poloniex.data[currentTicker.get('Poloniex')].last);

    const hitbtc = yield call(getPriceFromHitbtc, currentTicker.get('Hitbtc'));
    const hitbtcPrice = Math.round(hitbtc.data.last);

    const binance = yield call(getPriceFromBinance);
    const binancePrice = Math.round(binance.data.find(ticker => ticker.symbol === currentTicker.get('Binance')).price);

    const pricesMap = new Map({
      Bitfinex: bitfinexPrice,
      Bittrex: bittrexPrice,
      Poloniex: poloniexPrice,
      Hitbtc: hitbtcPrice,
      Binance: binancePrice,
    })

    yield put(coinPriceUpdate(currentCoin, pricesMap));

  } catch (error) {
    console.log('coinPriceSaga error: ', error);
  }
}

export function* coinPriceSaga() {
  yield takeLatest(FETCH_COIN_PRICE, coinPrice);
}

export default coinPriceSaga;
