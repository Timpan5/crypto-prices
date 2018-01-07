/* eslint-disable import/prefer-default-export */

import * as priceConstants from '../constants/pricesConstants';

export const updateName = (text) => ({
  type: priceConstants.COIN_NAME_UPDATE,
  text,
});

export const fetchCoinPrice = (coin) => ({
  type: priceConstants.FETCH_COIN_PRICE,
  coin,
});
