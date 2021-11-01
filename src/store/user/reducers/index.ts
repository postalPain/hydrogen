import { TYPES, TBasketProduct } from '../actions';
import { TPromoCode } from 'services/ServerAPI/types';
import { ICard, IOrder, IDeliveryAddress } from 'store/user/reducers/types';

interface IUserState {
  accessToken: string;
  user: string | null;
  errorMessage: string;
  loading: boolean;
  defaultCard: ICard | {};
  deliveryAddress: IDeliveryAddress | null;
  temporaryDeliveryAddress: IDeliveryAddress | null;
  cardList: ICard[],
  basket: {
    [key: string]: TBasketProduct
  },
  orderList: IOrder[],
  checkout: {
    loading: boolean;
    data: any;
    errorMessage: string | null;
  },
  promoCode: {
    loading: boolean;
    data: TPromoCode | null;
    errorMessage: string | null;
  }
}

const defaultState = {
  accessToken: '',
  user: null,
  errorMessage: '',
  loading: false,
  defaultCard: {},
  deliveryAddress: null,
  temporaryDeliveryAddress: null,
  cardList: [],
  basket: {},
  orderList: [],
  checkout: {
    loading: false,
    data: null,
    errorMessage: null,
  },
  promoCode: {
    loading: false,
    data: null,
    errorMessage: null,
  },
};

export default function user(state: IUserState = defaultState, action) {
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
        defaultCard: action.payload || {},
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
    case TYPES.SAVE_TEMPORARY_ADDRESS: {
      return {
        ...state,
        temporaryDeliveryAddress: action.payload,
      };
    }
    case TYPES.SET_PRODUCT_TO_BASKET: {
      let newBasketState = state.basket;
      if (action.payload.basketQuantity === 0) {
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
    case TYPES.REMOVE_PRODUCTS_FROM_BASKET: {
      const newBasketState = state.basket;
      action.payload.uuids.forEach((uuid) => {
        delete newBasketState[uuid];
      });
      return {
        ...state,
        basket: {
          ...newBasketState,
        },
      };
    }
    case TYPES.SAVE_ORDERS: {
      return {
        ...state,
        orderList: action.payload,
      };
    }
    case TYPES.CREATE_ORDER: {
      return {
        ...state,
        checkout: {
          ...state.checkout,
          loading: true,
        },
      };
    }
    case TYPES.CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        checkout: {
          errorMessage: null,
          data: null,
          loading: false,
        },
      };
    }
    case TYPES.CREATE_ORDER_ERROR: {
      return {
        ...state,
        checkout: {
          errorMessage: action.payload.message,
          data: action.payload.data,
          loading: false,
        },
      };
    }
    case TYPES.RESET_CREATE_ORDER_ERROR: {
      return {
        ...state,
        checkout: {
          errorMessage: null,
          data: null,
          loading: false,
        },
      };
    }
    case TYPES.CHECK_PROMO_CODE: {
      return {
        ...state,
        promoCode: {
          ...state.promoCode,
          errorMessage: null,
          loading: true,
        },
      };
    }
    case TYPES.CHECK_PROMO_CODE_SUCCESS: {
      return {
        ...state,
        promoCode: {
          errorMessage: null,
          data: {
            ...action.payload,
          },
          loading: false,
        },
      };
    }
    case TYPES.CHECK_PROMO_CODE_ERROR: {
      return {
        ...state,
        promoCode: {
          data: null,
          errorMessage: action.payload,
          loading: false,
        },
      };
    }
    case TYPES.RESET_PROMO_CODE: {
      return {
        ...state,
        promoCode: {
          data: null,
          errorMessage: null,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
}
