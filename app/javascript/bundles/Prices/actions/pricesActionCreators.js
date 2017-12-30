/* eslint-disable import/prefer-default-export */

import { COIN_NAME_UPDATE } from '../constants/pricesConstants';

export const updateName = (text) => ({
  type: COIN_NAME_UPDATE,
  text,
});
