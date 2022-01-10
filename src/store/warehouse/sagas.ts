import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import i18n from 'i18n';

import { userAPI } from 'services/ServerAPI/serverAPI';
import { WarehouseActionTypes } from 'store/warehouse/actions/types';
import { getClosestWarehouseError, getClosestWarehouseSuccess } from 'store/warehouse/actions';

function* getClosestWarehouseWorker(): SagaIterator {
  try {
    const { data: { data } } = yield call(userAPI.getClosestWarehouse);
    yield put(getClosestWarehouseSuccess(data));
  } catch (e) {
    yield put(getClosestWarehouseError(e.message || i18n.t('errors.something_went_wrong')));
  }
}

export default function* searchWatcher(): SagaIterator {
  yield takeEvery(WarehouseActionTypes.GET_CLOSEST_WAREHOUSE, getClosestWarehouseWorker);
}
