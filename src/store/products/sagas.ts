import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { userAPI } from 'services/ServerAPI/serverAPI';

import {
  getProductsByCategorySuccess,
  getProductsByCategoryError,
} from './actions';
import { ProductsActionTypes, IGetProductByCategory } from './actions/types';


function* getProductsByCategoryWorker(action: IGetProductByCategory): SagaIterator {
  try {
    const response = yield call(userAPI.getProductsByCategory, action.id);
    yield put(getProductsByCategorySuccess(action.id, response.data));
  } catch (error) {
    const payload = {
      message: error.message,
    };
    yield put(getProductsByCategoryError(action.id, payload));
  }
}

export default function* categoriesWatcher(): SagaIterator {
  yield takeEvery(ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY, getProductsByCategoryWorker);
}
