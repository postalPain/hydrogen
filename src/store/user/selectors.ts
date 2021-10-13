import { RootState } from 'store/rootReducer';

export const userErrorSelector = (state: RootState) => state.user.errorMessage;
export const userToken = (state: RootState) => state.user.accessToken;
