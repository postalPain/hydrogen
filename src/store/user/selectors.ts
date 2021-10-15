import { RootState } from 'store/rootReducer';

export const userErrorSelector = (state: RootState) => state.user.errorMessage;
export const userToken = (state: RootState) => state.user.accessToken;
export const basketSelector = () => (state: RootState) => state.user.basket;

export const basketProductSelector = (id: string) => (state: RootState) => (
  state.user.basket[id]
);

export const basketProductQuantitySelector = (id: string) => (state: RootState) => (
  state.user.basket[id] && state.user.basket[id].quantity || 0
);

export const basketLengthSelector = () => (state: RootState) => (
  Object.keys(state.user.basket).length
);
