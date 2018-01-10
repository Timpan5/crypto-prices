import axios from 'axios';

const BITFINEX_BASE_URL = 'https://api.bitfinex.com/v2';
const BITTREX_BASE_URL = 'https://bittrex.com/api/v1.1/public/getticker?market=USDT-BTC';

export function getPriceFromBitfinex(ticker) {
  const url = `${BITFINEX_BASE_URL}/ticker/${ticker}`;
  return axios.get(url);
}

export function getPriceFromBittrex(market) {
  const url = `${BITTREX_BASE_URL}`;
  return axios.get(url);
}
