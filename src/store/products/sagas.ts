import {
  takeEvery, put, call,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { userAPI } from 'services/ServerAPI/serverAPI';
import {
  getProductsBySubcategorySuccess,
  getProductsBySubcategoryError,
} from './actions';
import { ProductsActionTypes, IGetProductBySubcategory } from './actions/types';


function* getProductsBySubcategoryWorker(action: IGetProductBySubcategory): SagaIterator {
  try {
    const response = yield call(userAPI.getProductsBySubcategory, action.id);
    yield put(getProductsBySubcategorySuccess(action.id, response.data));
  } catch (error) {
    console.log(error);
    yield put(getProductsBySubcategoryError(action.id));
  }
}

export default function* categoriesWatcher(): SagaIterator {
  yield takeEvery(ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY, getProductsBySubcategoryWorker);
}
