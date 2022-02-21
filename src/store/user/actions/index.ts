import { TProduct, TPromoCode, IOrderCreated } from 'services/ServerAPI/types';
import { ICard, IOrder, IDeliveryAddress } from 'store/user/reducers/types';
import { UpdatePasswordType } from 'store/user/actions/types';

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
  ADD_TEMPORARY_CARD: 'ADD_TEMPORARY_CARD',
  SAVE_CARD: 'SAVE_CARD',
  SET_DEFAULT_CARD: 'SET_DEFAULT_CARD',
  SAVE_DEFAULT_CARD: 'SAVE_DEFAULT_CARD',
  GET_CARD_LIST: 'GET_CARD_LIST',
  SAVE_CARD_LIST: 'SAVE_CARD_LIST',
  ADD_ADDRESS: 'ADD_ADDRESS',
  SAVE_ADDRESS: 'SAVE_ADDRESS',
  SAVE_TEMPORARY_ADDRESS: 'SAVE_TEMPORARY_ADDRESS',
  SET_PRODUCT_TO_BASKET: 'SET_PRODUCT_TO_BASKET',
  SIGN_UP: 'SIGN_UP',
  REMOVE_PRODUCTS_FROM_BASKET: 'REMOVE_PRODUCTS_FROM_BASKET',
  GET_ORDERS: 'GET_ORDERS',
  SAVE_ORDERS: 'ADD_ORDERS',
  CREATE_ORDER: 'CREATE_ORDER',
  CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_ERROR: 'CREATE_ORDER_ERROR',
  RESET_CREATE_ORDER_ERROR: 'RESET_CREATE_ORDER_ERROR',
  CHECK_PROMO_CODE: 'CHECK_PROMO_CODE',
  CHECK_PROMO_CODE_SUCCESS: 'CHECK_PROMO_CODE_SUCCESS',
  CHECK_PROMO_CODE_ERROR: 'CHECK_PROMO_CODE_ERROR',
  RESET_PROMO_CODE: 'RESET_PROMO_CODE',
  CREATE_TEMPORARY_USER: 'CREATE_TEMPORARY_USER',
  RESET_PASSWORD: 'RESET_PASSWORD',
  UPDATE_PASSWORD: 'UPDATE_PASSWORD',
  REMOVE_DEFAULT_CARD: 'REMOVE_DEFAULT_CARD',
  REQUEST_PHONE_VERIFICATION: 'REQUEST_PHONE_VERIFICATION',
  REQUEST_PHONE_VERIFICATION_SUCCESS: 'REQUEST_PHONE_VERIFICATION_SUCCESS',
  REQUEST_PHONE_VERIFICATION_ERROR: 'REQUEST_PHONE_VERIFICATION_ERROR',
  REQUEST_PHONE_VERIFICATION_CLEAR: 'REQUEST_PHONE_VERIFICATION_CLEAR',
  VERIFY_PHONE: 'VERIFY_PHONE',
  VERIFY_PHONE_SUCCESS: 'VERIFY_PHONE_SUCCESS',
  VERIFY_PHONE_ERROR: 'VERIFY_PHONE_ERROR',
  VERIFY_PHONE_CLEAR: 'VERIFY_PHONE_CLEAR',
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
interface ICheckPromoCodePayload {
  code: string;
  subtotal: number;
}
interface IRequestPhoneVerificationPayload {
  phone: string;
}
interface IVerifyPhonePayload {
  phone: string;
  code: string;
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

export const addTemporaryCard = (cardInfo) => ({
  type: TYPES.ADD_TEMPORARY_CARD,
  payload: cardInfo,
});

export const saveCard = (cardInfo) => ({
  type: TYPES.SAVE_CARD,
  payload: cardInfo,
});

export const saveDefaultCard = (cardInfo: ICard) => ({
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

export const saveCardList = (cardList: ICard[]) => ({
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

export const saveAddress = (address: IDeliveryAddress) => ({
  type: TYPES.SAVE_ADDRESS,
  payload: address,
});

export const saveTemporaryAddress = (payload: IDeliveryAddress) => ({
  type: TYPES.SAVE_TEMPORARY_ADDRESS,
  payload,
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

export const createOrderSuccess = (payload: IOrderCreated) => ({
  type: TYPES.CREATE_ORDER_SUCCESS,
  payload,
});

export const createOrderError = (errorMessage: string, data: any = null) => ({
  type: TYPES.CREATE_ORDER_ERROR,
  payload: {
    message: errorMessage,
    data,
  },
});

export const resetCreateOrderError = () => ({
  type: TYPES.RESET_CREATE_ORDER_ERROR,
});

export const checkPromoCode = (payload: ICheckPromoCodePayload) => ({
  type: TYPES.CHECK_PROMO_CODE,
  payload,
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

export const resetPassword = (payload: { email: string }) => ({
  type: TYPES.RESET_PASSWORD,
  payload,
});

export const updatePassword = (payload: UpdatePasswordType) => ({
  type: TYPES.UPDATE_PASSWORD,
  payload,
});

export const removeDefaultCard = () => ({
  type: TYPES.REMOVE_DEFAULT_CARD,
});

export const requestPhoneVerification = (payload: IRequestPhoneVerificationPayload) => ({
  type: TYPES.REQUEST_PHONE_VERIFICATION,
  payload,
});
export const requestPhoneVerificationSuccess = () => ({
  type: TYPES.REQUEST_PHONE_VERIFICATION_SUCCESS,
});
export const requestPhoneVerificationError = (errorMessage: string) => ({
  type: TYPES.REQUEST_PHONE_VERIFICATION_ERROR,
  payload: errorMessage,
});
export const requestPhoneVerificationClear = () => ({
  type: TYPES.REQUEST_PHONE_VERIFICATION_CLEAR,
});
export const verifyPhone = (payload: IVerifyPhonePayload) => ({
  type: TYPES.VERIFY_PHONE,
  payload,
});
export const verifyPhoneSuccess = () => ({
  type: TYPES.VERIFY_PHONE_SUCCESS,
});
export const verifyPhoneError = (errorMessage: string) => ({
  type: TYPES.VERIFY_PHONE_ERROR,
  payload: errorMessage,
});
export const verifyPhoneClear = () => ({
  type: TYPES.VERIFY_PHONE_CLEAR,
});
