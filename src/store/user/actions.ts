export const TYPES = {
  SIGN_IN: 'SIGN_IN',
  SIGNED_IN: 'SIGNED_IN',
  SAVE_AUTH_TOKEN: 'SAVE_AUTH_TOKEN',
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  SAVE_USER: 'SAVE_USER',
  SIGN_OUT: 'SIGN_OUT',
  SIGNED_OUT: 'SIGNED_IN',
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
};

interface ISignIn {
  email: string;
  password: string;
}
interface ISetProductToBasketPayload {
  uuid: string;
  basketQuantity: number;
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

export const addAddress = (address) => ({
  type: TYPES.ADD_ADDRESS,
  payload: address,
});

export const saveAddress = (address) => ({
  type: TYPES.SAVE_ADDRESS,
  payload: address,
});

export const setProductToBasket = (payload: ISetProductToBasketPayload) => ({
  type: TYPES.SET_PRODUCT_TO_BASKET,
  payload,
});

export const signUp = (signUpData) => ({
  type: TYPES.SIGN_UP,
  payload: signUpData,
});
