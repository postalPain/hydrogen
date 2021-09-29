import {
  takeEvery, put, call, select,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { userAPI, addHeader, removeHeader } from 'services/ServerAPI/serverAPI';
import { removeItem, setItem } from 'services/LocalStorage';
import { history } from 'store';
import {
  TYPES,
  signedIn,
  setError,
  getUserSuccess,
  saveCard,
  saveCardList,
  saveDefaultCard,
} from './actions';
import Stripe from 'react-native-stripe-api';
import { STRIPE_PUBLIC_KEY } from '@env';

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
    const { data: { access_token: accessToken } } = response.data;
    yield call(addHeader, 'Authorization', `Bearer ${accessToken}`);
    setItem('AUTH_TOKEN', accessToken);
    yield put(signedIn(accessToken));
    // TODO uncomment when api will be available
    // yield put(getUser());
    // TODO: move this logic to initialization
    const { data: { data } } = yield call(userAPI.getCardList);
    yield put(saveCardList(data));
    const defaultCard = data.find((card) => card.isDefault);
    yield put(saveDefaultCard(defaultCard));
  } catch (error) {
    yield put(setError('Wrong email or password'));
  }
}

function* signOutWorker(): SagaIterator {
  try {
    yield call(removeHeader, 'Authorization');
    yield call(userAPI.signOut);
    yield call(removeItem, 'AUTH_TOKEN');
  } catch (error) {
    yield put(setError('Error on logout'));
  }
}

function* addCardWorker(action): SagaIterator {
  try {
    const client = new Stripe(STRIPE_PUBLIC_KEY);
    const { id } = yield client.createToken(action.payload);

    // TODO remove it when app initialization will be done
    const accessToken = yield select(state => state.user.accessToken);
    yield call(addHeader, 'Authorization', `Bearer ${accessToken}`);

    const { data: { data } } = yield call(userAPI.addCard, { token: id });

    yield put(saveDefaultCard(data));
    yield put(saveCard(data));
  } catch (e) {
    yield put(setError('Something went wrong'));
  }
}

function* setDefaultCardWorker(action): SagaIterator {
  try {
    const { data: { data } } = yield call(userAPI.setDefaultCard, action.payload);
    yield put(saveCardList(data));
    const defaultCard = data.find((card) => card.isDefault);
    yield put(saveDefaultCard(defaultCard));
  } catch (e) {
    yield put(setError('Something went wrong'));
  }
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(TYPES.SIGN_IN, signInWorker);
  yield takeEvery(TYPES.GET_USER, getUserWorker);
  yield takeEvery(TYPES.SIGN_OUT, signOutWorker);
  yield takeEvery(TYPES.ADD_CARD, addCardWorker);
  yield takeEvery(TYPES.SET_DEFAULT_CARD, setDefaultCardWorker);
}
