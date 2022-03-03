import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import i18n from 'i18n';

import { userAPI } from 'services/ServerAPI/serverAPI';
import { SearchActionTypes } from './actions/types';
import {
  searchProductsError, searchProductsNextPageError,
  searchProductsNextPageSuccess,
  searchProductsSuccess,
} from 'store/search/actions';

function* searchProductsWorker(action): SagaIterator {
  try {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { data: { data, meta: { last_page } } } = yield call(userAPI.search, action.payload, 1);
    yield put(searchProductsSuccess(data, last_page));
  } catch (e) {
    yield put(searchProductsError(e.message || i18n.t('errors.something_went_wrong')));
  }
}

function* searchProductsNextPageWorker(action): SagaIterator {
  try {
    const { data: { data } } = yield call(userAPI.search, action.payload, action.meta.page);
    yield put(searchProductsNextPageSuccess(data));
  } catch (e) {
    yield put(searchProductsNextPageError(e.message || i18n.t('errors.something_went_wrong')));
  }
}

export default function* searchWatcher(): SagaIterator {
  yield takeEvery(SearchActionTypes.SEARCH_PRODUCTS, searchProductsWorker);
  yield takeEvery(SearchActionTypes.SEARCH_PRODUCTS_NEXT_PAGE, searchProductsNextPageWorker);
}
