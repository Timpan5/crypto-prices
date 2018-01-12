import axios from 'axios';

const BITFINEX_BASE_URL = 'https://api.bitfinex.com/v2/ticker/';
const BITTREX_BASE_URL = 'https://bittrex.com/api/v1.1/public/getticker?market=';

export function getPriceFromBitfinex(ticker) {
  const url = `${BITFINEX_BASE_URL}${ticker}`;
  return axios.get(url);
}

export function getPriceFromBittrex(market) {
  const url = `${BITTREX_BASE_URL}${market}`;
  return axios.get(url);
}
