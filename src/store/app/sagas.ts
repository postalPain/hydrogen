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
import { awaitSomeTime } from 'utilities/helpers';
import { setItem, getItem } from 'services/LocalStorage';
import { addHeader, userAPI } from 'services/ServerAPI/serverAPI';
import { getUserWorker, updateUserFCMTokenWorker } from '../user/sagas';
import { getClosestWarehouseWorker } from '../warehouse/sagas';
import { saveCardList, saveDefaultCard, signedIn } from 'store/user/actions';
import { getCategoriesWorker } from '../categories/sagas';
import { appCompleteInit, setBoardingCompleted } from './actions';
import { AppActionTypes } from './actions/types';
import { trackEvent, TrackingEvent } from 'utilities/eventTracking';

function* appCompleteInitWorker(): SagaIterator {
  yield put(appCompleteInit());
  // give a time to navigator to initialize
  yield call(awaitSomeTime);
}

export function* signedAppDataWorker(): SagaIterator {
  try {
    yield call(getUserWorker);
    yield call(getCategoriesWorker);
    yield call(updateUserFCMTokenWorker);
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
    yield call(getClosestWarehouseWorker);
    const boardingCompletedValue = yield call(getItem, storageKeys.boardingCompleted);
    // eslint-disable-next-line no-shadow
    const boardingCompleted = boardingCompletedValue && boardingCompletedValue === 'true';
    yield put(setBoardingCompleted(boardingCompleted));

    if (!boardingCompleted) {
      yield call(appCompleteInitWorker);
      navigate(Routes.Onboard);
      // Hide native splashscreen
      SplashScreen.hide();
      return;
    }
    //
    const token = yield call(getItem, storageKeys.authToken);
    if (!token) {
      yield call(appCompleteInitWorker);
      navigate(Routes.Login);
      // Hide native splashscreen
      SplashScreen.hide();
      return;
    }

    yield put(signedIn(token));
    yield call(addHeader, 'Authorization', `Bearer ${token}`);
    yield call(signedAppDataWorker);

    yield call(appCompleteInitWorker);
    navigate(Routes.HomeTabScreen, {
      screen: Routes.HomeScreen,
    });
    // Hide native splashscreen
    SplashScreen.hide();
  } catch (error) {
    console.log(error);
  }
}

function* boardingCompletedWorker(): SagaIterator {
  try {
    yield call(setItem, storageKeys.boardingCompleted, 'true');
    yield call(trackEvent, TrackingEvent.OnboardingCompleted);
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesWatcher(): SagaIterator {
  yield takeEvery(AppActionTypes.APP_INIT, initAppWorker);
  yield takeEvery(AppActionTypes.APP_BOARDING_COMPLETED, boardingCompletedWorker);
}
