import * as headerConstants from '../constants/headerConstants';

export const coinNameUpdate = (coinName) => ({
  type: headerConstants.COIN_NAME_UPDATE,
  coinName,
});
