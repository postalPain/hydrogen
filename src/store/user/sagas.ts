import { takeEvery, put, call } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { userAPI, xhr } from 'services/ServerAPI/serverAPI';
import { removeItem, setItem } from 'services/LocalStorage';
import { history } from 'store';
import {
  TYPES, signedIn, setError, getUser, getUserSuccess,
} from './actions';

function* getUserWorker(): SagaIterator {
  try {
    const response = yield call(userAPI.getCurrentUser);
    yield put(getUserSuccess(response.data));
  } catch (error) {
    history.push('/signin');
  }
}

function* signInWorker(action): SagaIterator {
  try {
    const response = yield call(userAPI.signIn, action.payload);
    const { accessToken } = response.data;
    xhr.defaults.headers.Authorization = `Bearer ${accessToken}`;
    setItem('AUTH_TOKEN', accessToken);
    yield put(signedIn(accessToken));
    yield put(getUser());
  } catch (error) {
    yield put(setError('Wrong email or password'));
  }
}

function* signOutWorker(): SagaIterator {
  try {
    xhr.defaults.headers.Authorization = '';
    yield call(userAPI.signOut);
    yield call(removeItem, 'AUTH_TOKEN');
  } catch (error) {
    yield put(setError('Error on logout'));
  }
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(TYPES.SIGN_IN, signInWorker);
  yield takeEvery(TYPES.GET_USER, getUserWorker);
  yield takeEvery(TYPES.SIGN_OUT, signOutWorker);
}
