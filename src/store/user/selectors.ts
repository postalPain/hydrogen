import { RootState } from 'store/rootReducer';

export const tokenSelector = (state: RootState) => state.user.accessToken;
export const errorMessageSelector = (state: RootState) => state.user.errorMessage;
