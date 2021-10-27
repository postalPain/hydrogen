import { RootState } from 'store/rootReducer';

export const userSelector = (state: RootState) => state.user.user;
export const userErrorSelector = (state: RootState) => state.user.errorMessage;
export const userTokenSelector = (state: RootState) => state.user.accessToken;
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

export const orderListSelector = (state: RootState) => state.user.orderList;

export const promoCodeSelector = () => (state: RootState) => (
  state.user.promoCode.data
);
export const promoCodeLoadingSelector = () => (state: RootState) => state.user.promoCode.loading;
export const promoCodeErrorSelector = () => (state: RootState) => state.user.promoCode.errorMessage;
