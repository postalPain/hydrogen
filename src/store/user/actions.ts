export const TYPES = {
  SIGN_IN: 'SIGN_IN',
  SIGNED_IN: 'SIGNED_IN',
  GET_USER: 'GET_USER',
  GET_USER_SUCCESS: 'GET_USER_SUCCESS',
  SIGN_OUT: 'SIGN_OUT',
  SIGNED_OUT: 'SIGNED_IN',
  AUTH_ERROR: 'AUTH_ERROR',
  ADD_CARD: 'ADD_CARD',
  SAVE_CARD: 'SAVE_CARD',
  SET_DEFAULT_CARD: 'SET_DEFAULT_CARD',
};

interface ISignIn {
  email: string;
  password: string;
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

export const setDefaultCard = (cardInfo) => ({
  type: TYPES.SET_DEFAULT_CARD,
  payload: cardInfo,
});
