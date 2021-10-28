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
