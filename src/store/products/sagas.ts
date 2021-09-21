import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

import { addHeader, userAPI } from 'services/ServerAPI/serverAPI';
import {
  getProductsBySubcategorySuccess,
  getProductsBySubcategoryError,
} from './actions';
import { ProductsActionTypes, IGetProductBySubcategory } from './actions/types';


function* getProductsBySubcategoryWorker(action: IGetProductBySubcategory): SagaIterator {
  try {
    // TODO remove it when app initialization will be done
    const accessToken = yield select(state => state.user.accessToken);
    yield call(addHeader, 'Authorization', `Bearer ${accessToken}`);

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
