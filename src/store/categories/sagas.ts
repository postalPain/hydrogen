import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { addHeader, userAPI } from 'services/ServerAPI/serverAPI';
import {
  getCategoriesSuccess,
  getCategoriesError,
} from './actions';
import { CategoriesActionTypes } from './actions/types';


function* getCategoriesWorker(): SagaIterator {
  try {
    // TODO remove it when app initialization will be done
    const accessToken = yield select(state => state.user.accessToken);
    yield call(addHeader, 'Authorization', `Bearer ${accessToken}`);

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
