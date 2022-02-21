import { RootState } from 'store/rootReducer';

export const userSelector = (state: RootState) => state.user.user;
export const userErrorSelector = (state: RootState) => state.user.errorMessage;
export const userTokenSelector = (state: RootState) => state.user.accessToken;
export const basketSelector = () => (state: RootState) => state.user.basket;

export const basketProductSelector = (id: string) => (state: RootState) => (
  state.user.basket[id]
);

export const basketProductsByProductIdsSelector = (ids: string[]) => (state: RootState) => {
  const basketProducts = Object.values(state.user.basket);
  return ids.map(productId => basketProducts.find(bProduct => bProduct.product_uuid === productId));
};

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
export const defaultCardSelector = (state: RootState) => state.user.defaultCard;
export const cardListSelector = (state: RootState) => state.user.cardList;
export const deliveryAddressSelector = (state: RootState) => state.user.deliveryAddress;
export const temporaryDeliveryAddressSelector = (state: RootState) => state
  .user.temporaryDeliveryAddress;

export const checkoutLoadingSelector = () => (state: RootState) => state.user.checkout.loading;
export const checkoutErrorMessageSelector = () => (state: RootState) => (
  state.user.checkout.errorMessage
);
export const checkoutDataSelector = () => (state: RootState) => state.user.checkout.data;
export const checkoutErrorDataSelector = () => (state: RootState) => state.user.checkout.errorData;
export const userLoadingSelector = (state: RootState) => state.user.loading;
export const requestPhoneVerificationLoadingSelector = () => (state: RootState) => (
  state.user.requestPhoneVerification.loading
);
export const phoneVerificationLoadingSelector = () => (state: RootState) => (
  state.user.phoneVerification.loading
);
