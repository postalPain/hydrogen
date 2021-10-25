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
  saveUser,
  saveAddress,
} from './actions';
import Stripe from 'react-native-stripe-api';
import { STRIPE_PUBLIC_KEY } from '@env';
import { AUTH_TOKEN } from '../../constants';
import { getNavigationState, navigate } from 'navigation/NavigationUtilities';
import { Routes } from 'navigation';

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
    const navigationState = getNavigationState();
    const previousScreen = navigationState && navigationState[navigationState.length - 2]?.name;
    yield put(setError(''));
    const response = yield call(userAPI.signIn, action.payload);
    const { data: { access_token: accessToken, user } } = response.data;
    yield call(addHeader, 'Authorization', `Bearer ${accessToken}`);
    setItem(AUTH_TOKEN, accessToken);
    yield put(signedIn(accessToken));
    yield put(saveUser(user));
    if (previousScreen === Routes.SignUp) {
      yield call(navigate, Routes.Checkout);
    } else {
      // TODO: Enable when whole app flow will be ready
      // yield call(navigate, Routes.DrawerNavigation);
    }
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
    // TODO: Uncomment when backend will be ready
    // yield call(userAPI.signOut);
    yield call(removeItem, AUTH_TOKEN);
    yield call(navigate, Routes.Onboard);
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

function* addAddressWorker(action): SagaIterator {
  try {
    yield put(setError(''));
    const { data: { data } } = yield call(userAPI.addAddress, action.payload);
    const { access_token: accessToken, delivery_address: deliveryAddress } = data;
    setItem(AUTH_TOKEN, accessToken);
    yield put(signedIn(accessToken));
    yield put(saveAddress(deliveryAddress));
    yield call(navigate, Routes.DrawerNavigation);
  } catch (e) {
    yield put(setError('Something went wrong'));
  }
}

function* signUpWorker(action): SagaIterator {
  try {
    yield put(setError(''));
    const { data: { data } } = yield call(userAPI.signUp, action.payload);
    const { access_token: accessToken, user } = data;
    setItem(AUTH_TOKEN, accessToken);
    yield put(signedIn(accessToken));
    yield put(saveUser(user));
    navigate(Routes.Checkout);
  } catch (error) {
    yield put(setError('Something went wrong'));
  }
}

export default function* userWatcher(): SagaIterator {
  yield takeEvery(TYPES.SIGN_IN, signInWorker);
  yield takeEvery(TYPES.GET_USER, getUserWorker);
  yield takeEvery(TYPES.SIGN_OUT, signOutWorker);
  yield takeEvery(TYPES.ADD_CARD, addCardWorker);
  yield takeEvery(TYPES.SET_DEFAULT_CARD, setDefaultCardWorker);
  yield takeEvery(TYPES.ADD_ADDRESS, addAddressWorker);
  yield takeEvery(TYPES.SIGN_UP, signUpWorker);
}
