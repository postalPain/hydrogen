export enum AppActionTypes {
  APP_INIT = 'APP_INIT',
  APP_INIT_COMPLETED = 'APP_INIT_COMPLETED',
  APP_BOARDING_COMPLETED = 'APP_BOARDING_COMPLETED',
  SET_BOARDING_COMPLETED = 'SET_BOARDING_COMPLETED',
  SAVE_APP_OPTIONS = 'SAVE_APP_OPTIONS',
  SET_APP_LOADER_VISIBILITY = 'SET_APP_LOADER_VISIBILITY',
}

export interface AppInitType {
  type: AppActionTypes.APP_INIT,
}
export interface AppCompleteInitType {
  type: AppActionTypes.APP_INIT_COMPLETED,
}
export interface AppCompleteBoardingType {
  type: AppActionTypes.APP_BOARDING_COMPLETED,
}
export interface SetBoardingCompletedType {
  type: AppActionTypes.SET_BOARDING_COMPLETED,
  status: boolean,
}
export interface SetAppLoaderVisibilityType {
  type: AppActionTypes.SET_APP_LOADER_VISIBILITY,
  visibility: boolean;
}

export type AppActions = AppInitType | AppCompleteInitType | AppCompleteBoardingType
| SetBoardingCompletedType | SetAppLoaderVisibilityType;
