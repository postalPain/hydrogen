import {
  call,
  put,
  takeEvery,
  select,
} from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import SplashScreen from 'react-native-splash-screen';

import { storageKeys } from 'constants/';
import { navigate } from 'navigation/NavigationUtilities';
import Routes from 'navigation/Routes';
import { setItem, getItem } from 'services/LocalStorage';
import { addHeader, userAPI } from 'services/ServerAPI/serverAPI';
// import { getUserWorker } from '../user/sagas';
import { saveCardList, saveDefaultCard, signedIn } from 'store/user/actions';
import { getCategoriesWorker } from '../categories/sagas';
import { appCompleteInit, setBoardingCompleted } from './actions';
import { AppActionTypes } from './actions/types';


export function* signedAppDataWorker(): SagaIterator {
  try {
    // TODO uncomment when BAE will be ready
    // yield call(getUserWorker);
    yield call(getCategoriesWorker);
    const user = yield select(state => state.user.user);

    // check is registered user
    if (user && user.email) {
      const { data: { data } } = yield call(userAPI.getCardList);
      yield put(saveCardList(data));
      const defaultCard = data.find((card) => card.isDefault);
      yield put(saveDefaultCard(defaultCard));
    }
  } catch (e) {
    console.log(e);
  }
}

function* initAppWorker(): SagaIterator {
  try {
    console.log('App start init...');
    const boardingCompletedValue = yield call(getItem, storageKeys.boardingCompleted);
    // eslint-disable-next-line no-shadow
    const boardingCompleted = boardingCompletedValue && boardingCompletedValue === 'true';
    yield put(setBoardingCompleted(boardingCompleted));

    if (!boardingCompleted) {
      yield put(appCompleteInit());
      navigate(Routes.Onboard);
      // Hide native splashscreen
      SplashScreen.hide();
      return;
    }
    //
    const token = yield call(getItem, storageKeys.authToken);
    if (!token) {
      yield put(appCompleteInit());
      navigate(Routes.Login);
      // Hide native splashscreen
      SplashScreen.hide();
      return;
    }

    yield put(signedIn(token));
    yield call(addHeader, 'Authorization', `Bearer ${token}`);
    yield call(signedAppDataWorker);

    yield put(appCompleteInit());
    navigate(Routes.DrawerNavigation);
    // Hide native splashscreen
    SplashScreen.hide();
  } catch (error) {
    console.log(error);
  }
}

function* boardingCompletedWorker(): SagaIterator {
  try {
    yield call(setItem, storageKeys.boardingCompleted, 'true');
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesWatcher(): SagaIterator {
  yield takeEvery(AppActionTypes.APP_INIT, initAppWorker);
  yield takeEvery(AppActionTypes.APP_BOARDING_COMPLETED, boardingCompletedWorker);
}
