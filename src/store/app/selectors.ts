import { RootState } from 'store/rootReducer';

export const appStatusSelector = (state: RootState) => state.app.status;
export const appBoardingCompletedSelector = (state: RootState) => state.app.boardingCompleted;
export const appOptionsSelector = (state: RootState) => state.app.appOptions;
export const appLoaderVisibilitySelector = (state: RootState) => state.app.loaderVisibility;
