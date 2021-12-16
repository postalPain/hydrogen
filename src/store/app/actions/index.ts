import { AppActions, AppActionTypes } from './types';
import { TAppOptions } from 'store/app/reducers/types';

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

export const saveAppOptions = (payload: TAppOptions) => ({
  type: AppActionTypes.SAVE_APP_OPTIONS,
  payload,
});

export const setAppLoaderVisibility = (visibility: boolean): AppActions => ({
  type: AppActionTypes.SET_APP_LOADER_VISIBILITY,
  visibility,
});
