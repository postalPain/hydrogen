import { TRatePopupStatus } from '../reducers/types';
import { AppActions, AppActionTypes } from './types';

export const appInit = (): AppActions => ({
  type: AppActionTypes.APP_INIT,
});

export const appCompleteInit = (): AppActions => ({
  type: AppActionTypes.APP_INIT_COMPLETED,
});

export const appCompleteBoarding = (): AppActions => ({
  type: AppActionTypes.APP_BOARDING_COMPLETED,
});

export const setBoardingCompleted = (status: boolean): AppActions => ({
  type: AppActionTypes.SET_BOARDING_COMPLETED,
  status,
});

export const setAppLoaderVisibility = (visibility: boolean): AppActions => ({
  type: AppActionTypes.SET_APP_LOADER_VISIBILITY,
  visibility,
});

export const setAppLaunchCount = (count: number): AppActions => ({
  type: AppActionTypes.SET_APP_LAUNCH_COUNT,
  count,
});

export const setAppLastRatePopupStatus = (status: TRatePopupStatus): AppActions => ({
  type: AppActionTypes.SET_APP_LAST_RATE_POPUP_STATUS,
  status,
});
