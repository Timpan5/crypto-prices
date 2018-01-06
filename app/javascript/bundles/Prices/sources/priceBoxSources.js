import axios from 'axios';

const BITFINEX_BASE_URL = 'https://api.bitfinex.com/v2';

export function getPriceFromApi() {
  var url = `${BITFINEX_BASE_URL}/ticker/tBTCUSD`;

  return axios.get(url);
}
