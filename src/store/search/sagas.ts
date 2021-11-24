import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import i18n from 'i18n';

import { userAPI } from 'services/ServerAPI/serverAPI';
import { SearchActionTypes } from './actions/types';
import { searchProductsError, searchProductsSuccess } from 'store/search/actions';

function* searchProductsWorker(action): SagaIterator {
  try {
    const { data: { data } } = yield call(userAPI.search, action.payload);
    yield put(searchProductsSuccess(data));
  } catch (e) {
    yield put(searchProductsError(e.message || i18n.t('errors.something_went_wrong')));
  }
}

export default function* searchWatcher(): SagaIterator {
  yield takeEvery(SearchActionTypes.SEARCH_PRODUCTS, searchProductsWorker);
}
