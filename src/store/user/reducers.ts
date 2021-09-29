import { TYPES } from './actions';

const defaultState = {
  accessToken: null,
  user: null,
  errorMessage: '',
  loading: false,
  defaultCard: {},
  cardList: [],
};

export default function authentication(state = defaultState, action) {
  switch (action.type) {
    case TYPES.SIGN_IN: {
      return {
        ...state,
        loading: true,
      };
    }
    case TYPES.SIGNED_IN: {
      return {
        ...state,
        accessToken: action.payload,
        errorMessage: '',
        loading: false,
      };
    }
    case TYPES.AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };
    }
    case TYPES.SIGN_OUT: {
      return {
        ...state,
        accessToken: '',
        user: null,
      };
    }
    case TYPES.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    case TYPES.SAVE_DEFAULT_CARD: {
      return {
        ...state,
        defaultCard: action.payload,
      };
    }
    case TYPES.SAVE_CARD: {
      return {
        ...state,
        cardList: [
          ...state.cardList,
          action.payload,
        ],
      };
    }
    case TYPES.SAVE_CARD_LIST: {
      return {
        ...state,
        cardList: action.payload,
      };
    }
    default:
      return state;
  }
}
