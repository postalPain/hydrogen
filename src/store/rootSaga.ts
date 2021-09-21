import { all, fork } from 'redux-saga/effects';

import userSagas from './user/sagas';
import categoriesSagas from './categories/sagas';
import productsSagas from './products/sagas';


export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(categoriesSagas),
    fork(productsSagas),
  ]);
}
