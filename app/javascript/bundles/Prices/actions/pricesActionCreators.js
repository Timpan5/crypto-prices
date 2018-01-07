import * as priceConstants from '../constants/pricesConstants';
import { COIN_PRICE_UPDATE } from '../constants/pricesConstants';

export const updateName = (text) => ({
  type: priceConstants.COIN_NAME_UPDATE,
  text,
});

export const coinPriceUpdate = (coin, price) => ({
  type: priceConstants.COIN_PRICE_UPDATE,
  coin,
  price,
});

export const fetchCoinPrice = (coin) => ({
  type: priceConstants.FETCH_COIN_PRICE,
  coin,
});
