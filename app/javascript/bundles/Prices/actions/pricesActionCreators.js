import * as priceConstants from '../constants/pricesConstants';
import { COIN_PRICE_UPDATE } from '../constants/pricesConstants';

export const coinPriceUpdate = (coin, pricesMap) => ({
  type: priceConstants.COIN_PRICE_UPDATE,
  coin,
  pricesMap,
});

export const fetchCoinPrice = (coin) => ({
  type: priceConstants.FETCH_COIN_PRICE,
  coin,
});
