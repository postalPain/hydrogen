import { all, fork } from 'redux-saga/effects';

import userSagas from './user/sagas';
import categoriesSagas from './categories/sagas';


export default function* rootSaga() {
  yield all([
    fork(userSagas),
    fork(categoriesSagas),
  ]);
}
