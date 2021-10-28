import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { userAPI } from 'services/ServerAPI/serverAPI';
import {
  getCategoriesSuccess,
  getCategoriesError,
} from './actions';
import { CategoriesActionTypes } from './actions/types';


export function* getCategoriesWorker(): SagaIterator {
  try {
    const response = yield call(userAPI.getCategories);
    yield put(getCategoriesSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(getCategoriesError());
  }
}

export default function* categoriesWatcher(): SagaIterator {
  yield takeEvery(CategoriesActionTypes.GET_CATEGORIES, getCategoriesWorker);
}
