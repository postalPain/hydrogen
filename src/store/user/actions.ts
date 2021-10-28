import { TProduct, TPromoCode } from 'services/ServerAPI/types';
import { IOrder } from 'store/user/reducers/types';

export const TYPES = {
  SIGN_IN: 'SIGN_IN',
  SIGNED_IN: 'SIGNED_IN',
  SAVE_AUTH_TOKEN: 'SAVE_AUTH_TOKEN',
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  SAVE_USER: 'SAVE_USER',
  SIGN_OUT: 'SIGN_OUT',
  SIGNED_OUT: 'SIGNED_OUT',
  AUTH_ERROR: 'AUTH_ERROR',
  ADD_CARD: 'ADD_CARD',
  SAVE_CARD: 'SAVE_CARD',
  SET_DEFAULT_CARD: 'SET_DEFAULT_CARD',
  SAVE_DEFAULT_CARD: 'SAVE_DEFAULT_CARD',
  GET_CARD_LIST: 'GET_CARD_LIST',
  SAVE_CARD_LIST: 'SAVE_CARD_LIST',
  ADD_ADDRESS: 'ADD_ADDRESS',
  SAVE_ADDRESS: 'SAVE_ADDRESS',
  SET_PRODUCT_TO_BASKET: 'SET_PRODUCT_TO_BASKET',
  SIGN_UP: 'SIGN_UP',
  REMOVE_PRODUCTS_FROM_BASKET: 'REMOVE_PRODUCTS_FROM_BASKET',
  GET_ORDERS: 'GET_ORDERS',
  SAVE_ORDERS: 'ADD_ORDERS',
  CREATE_ORDER: 'CREATE_ORDER',
  CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR: 'CREATE_ORDER_ERROR',
  CHECK_PROMO_CODE: 'CHECK_PROMO_CODE',
  CHECK_PROMO_CODE_SUCCESS: 'CHECK_PROMO_CODE_SUCCESS',
  CHECK_PROMO_CODE_ERROR: 'CHECK_PROMO_CODE_ERROR',
  RESET_PROMO_CODE: 'RESET_PROMO_CODE',
  CREATE_TEMPORARY_USER: 'CREATE_TEMPORARY_USER',
};

export type TBasketProduct = TProduct & {
  basketQuantity: number;
};

interface ISignIn {
  email: string;
  password: string;
}

interface IRemoveProductsFromBasketPayload {
  uuids: string[],
}

export const signIn = ({ email, password }) => ({
  type: TYPES.SIGN_IN,
  payload: { email, password },
});

export const signedIn = (accessToken) => ({
  type: TYPES.SIGNED_IN,
  payload: accessToken,
});

export const getUser = () => ({
  type: TYPES.GET_USER,
});

export const getUserSuccess = (user) => ({
  type: TYPES.GET_USER_SUCCESS,
  payload: user,
});

export const signOut = () => ({
  type: TYPES.SIGN_OUT,
});

export const setError = (errorMessage) => ({
  type: TYPES.AUTH_ERROR,
  payload: { errorMessage },
});

export const addCard = (cardInfo) => ({
  type: TYPES.ADD_CARD,
  payload: cardInfo,
});

export const saveCard = (cardInfo) => ({
  type: TYPES.SAVE_CARD,
  payload: cardInfo,
});

export const saveDefaultCard = (cardInfo) => ({
  type: TYPES.SAVE_DEFAULT_CARD,
  payload: cardInfo,
});

export const setDefaultCard = (id) => ({
  type: TYPES.SET_DEFAULT_CARD,
  payload: id,
});

export const getCardList = () => ({
  type: TYPES.GET_CARD_LIST,
});

export const saveCardList = (cardList) => ({
  type: TYPES.SAVE_CARD_LIST,
  payload: cardList,
});

export const saveUser = (user) => ({
  type: TYPES.SAVE_USER,
  payload: user,
});

export const createTemporaryUser = (address) => ({
  type: TYPES.CREATE_TEMPORARY_USER,
  payload: address,
});

export const saveAddress = (address) => ({
  type: TYPES.SAVE_ADDRESS,
  payload: address,
});

export const setProductToBasket = (payload: TBasketProduct) => ({
  type: TYPES.SET_PRODUCT_TO_BASKET,
  payload,
});

export const signUp = (signUpData) => ({
  type: TYPES.SIGN_UP,
  payload: signUpData,
});

export const removeProductsFromBasket = (payload: IRemoveProductsFromBasketPayload) => ({
  type: TYPES.REMOVE_PRODUCTS_FROM_BASKET,
  payload,
});

export const getOrders = () => ({
  type: TYPES.GET_ORDERS,
});

export const saveOrders = (payload: IOrder[]) => ({
  type: TYPES.SAVE_ORDERS,
  payload,
});

export const createOrder = (payload: { comment: string }) => ({
  type: TYPES.CREATE_ORDER,
  payload,
});

export const createOrderSuccess = () => ({
  type: TYPES.CREATE_ORDER_SUCCESS,
});

export const createOrderError = () => ({
  type: TYPES.CREATE_ORDER_ERROR,
});

export const checkPromoCode = (code: string) => ({
  type: TYPES.CHECK_PROMO_CODE,
  payload: code,
});

export const checkPromoCodeSuccess = (payload: TPromoCode) => ({
  type: TYPES.CHECK_PROMO_CODE_SUCCESS,
  payload,
});

export const checkPromoCodeError = (errorMessage: string) => ({
  type: TYPES.CHECK_PROMO_CODE_ERROR,
  payload: errorMessage,
});

export const resetPromoCode = () => ({
  type: TYPES.RESET_PROMO_CODE,
});
