import { all, fork } from 'redux-saga/effects';

import userSagas from './user/sagas';
import categoriesSagas from './categories/sagas';
import productsSagas from './products/sagas';
import appSagas from './app/sagas';


export default function* rootSaga() {
  yield all([
    fork(appSagas),
    fork(userSagas),
    fork(categoriesSagas),
    fork(productsSagas),
  ]);
}
