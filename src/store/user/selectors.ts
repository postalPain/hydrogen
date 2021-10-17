import { RootState } from 'store/rootReducer';

export const userErrorSelector = (state: RootState) => state.user.errorMessage;
export const userToken = (state: RootState) => state.user.accessToken;
export const basketSelector = () => (state: RootState) => state.user.basket;

export const basketProductSelector = (id: string) => (state: RootState) => (
  state.user.basket[id]
);

export const basketProductQuantitySelector = (id: string) => (state: RootState) => (
  state.user.basket[id] && state.user.basket[id].basketQuantity || 0
);

export const basketLengthSelector = () => (state: RootState) => (
  Object.values(state.user.basket).reduce((sum, item) => (
    sum + item.basketQuantity
  ), 0)
);
