import { all, fork } from 'redux-saga/effects';

import userSagas from './user/sagas';
import categoriesSagas from './categories/sagas';
import productsSagas from './products/sagas';
import appSagas from './app/sagas';
import searchSaga from './search/sagas';
import warehouseSaga from './warehouse/sagas';

export default function* rootSaga() {
  yield all([
    fork(appSagas),
    fork(userSagas),
    fork(categoriesSagas),
    fork(productsSagas),
    fork(searchSaga),
    fork(warehouseSaga),
  ]);
}
