import * as priceConstants from '../constants/pricesConstants';
import { COIN_PRICE_UPDATE } from '../constants/pricesConstants';

export const updateName = (text) => ({
  type: priceConstants.COIN_NAME_UPDATE,
  text,
});

export const coinPriceUpdate = (coin, exchange, price) => ({
  type: priceConstants.COIN_PRICE_UPDATE,
  coin,
  exchange,
  price,
});

export const fetchCoinPrice = (coin) => ({
  type: priceConstants.FETCH_COIN_PRICE,
  coin,
});
