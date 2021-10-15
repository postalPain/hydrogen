import { TYPES } from './actions';

const defaultState = {
  accessToken: '',
  user: null,
  errorMessage: '',
  loading: false,
  defaultCard: {},
  deliveryAddress: null,
  cardList: [],
  basket: {},
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
    case TYPES.SAVE_USER: {
      return {
        ...state,
        user: action.payload,
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
    case TYPES.SAVE_ADDRESS: {
      return {
        ...state,
        deliveryAddress: action.payload,
      };
    }
    case TYPES.SET_PRODUCT_TO_BASKET: {
      let newBasketState = state.basket;
      if (action.payload.quantity === 0) {
        delete newBasketState[action.payload.uuid];
      } else {
        newBasketState = {
          ...newBasketState,
          [action.payload.uuid]: {
            ...action.payload,
          },
        };
      }
      return {
        ...state,
        basket: {
          ...newBasketState,
        },
      };
    }
    default:
      return state;
  }
}
