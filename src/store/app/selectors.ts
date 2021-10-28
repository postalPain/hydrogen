import { RootState } from 'store/rootReducer';

export const appStatusSelector = (state: RootState) => state.app.status;
export const appBoardingCompletedSelector = (state: RootState) => state.app.boardingCompleted;
