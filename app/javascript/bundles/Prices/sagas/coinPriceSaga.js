import { call, takeLatest, select, put } from 'redux-saga/effects';
// import { getPriceFromApi } from '../sources/priceBoxSources';
// import { MARK_AS_COMPLETED_BPMH } from 'Bpmh/constants/actionTypes';

function* coinPrice() {
  try {
    var price = yield call(getPriceFromApi);
  } catch (error) {

  }
}

export function* coinPriceSaga() {
  yield takeLatest('TEST', coinPrice);
}

export default coinPriceSaga;
