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
import { setItem, getItem, removeItem } from 'services/LocalStorage';
import { addHeader, userAPI } from 'services/ServerAPI/serverAPI';
import { getUserWorker, updateUserFCMTokenWorker } from '../user/sagas';
import { getClosestWarehouseWorker } from '../warehouse/sagas';
import { saveCardList, saveDefaultCard, signedIn } from 'store/user/actions';
import { getCategoriesWorker } from '../categories/sagas';
import {
  appCompleteInit,
  setBoardingCompleted,
  setAppLaunchCount,
  setAppLastRatePopupStatus,
} from './actions';
import { AppActionTypes, SetAppLastRatePopupStatusType } from './actions/types';
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
    const launchCountValue = yield call(getItem, storageKeys.appLaunchCount);
    const launchCount = launchCountValue || '0';
    const updatedLaunchCount = parseInt(launchCount, 10) + 1;
    yield call(setItem, storageKeys.appLaunchCount, updatedLaunchCount.toString());
    yield put(setAppLaunchCount(updatedLaunchCount));

    const lastRatePopupStatus = yield call(getItem, storageKeys.lastRatePopupStatus);
    yield put(setAppLastRatePopupStatus(lastRatePopupStatus));

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

function* setAppLastRatePopupStatusWorker(action: SetAppLastRatePopupStatusType): SagaIterator {
  try {
    if (!action.status) {
      yield call(removeItem, storageKeys.lastRatePopupStatus);
    } else {
      yield call(setItem, storageKeys.lastRatePopupStatus, action.status);
    }
  } catch (e) {
    console.log(e);
  }
}

export default function* categoriesWatcher(): SagaIterator {
  yield takeEvery(AppActionTypes.APP_INIT, initAppWorker);
  yield takeEvery(AppActionTypes.APP_BOARDING_COMPLETED, boardingCompletedWorker);
  yield takeEvery(AppActionTypes.SET_APP_LAST_RATE_POPUP_STATUS, setAppLastRatePopupStatusWorker);
}
