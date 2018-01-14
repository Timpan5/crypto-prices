import * as priceConstants from '../constants/pricesConstants';

export const coinPriceUpdate = (coin, pricesMap) => ({
  type: priceConstants.COIN_PRICE_UPDATE,
  coin,
  pricesMap,
});

export const fetchCoinPrice = () => ({
  type: priceConstants.FETCH_COIN_PRICE,
});
