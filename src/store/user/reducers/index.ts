import { TYPES, TBasketProduct } from '../actions';
import { TPromoCode, IOrderCreated, TUser } from 'services/ServerAPI/types';
import { ICard, IOrder, IDeliveryAddress } from 'store/user/reducers/types';

interface IUserState {
  accessToken: string;
  user: TUser | null;
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
    data: IOrderCreated | null;
    errorData: any;
    errorMessage: string | null;
  },
  promoCode: {
    loading: boolean;
    data: TPromoCode | null;
    errorMessage: string | null;
  }
}

const defaultState: IUserState = {
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
    errorData: null,
    errorMessage: null,
  },
  promoCode: {
    loading: false,
    data: null,
    errorMessage: null,
  },
};

export default function user(state: IUserState = defaultState, action): IUserState {
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
        // TODO refactor handling delivery address to user section
        deliveryAddress: action.payload.delivery_address || state.deliveryAddress,
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
        basket: {},
      };
    }
    case TYPES.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload.data,
        // TODO refactor handling delivery address to user section
        deliveryAddress: action.payload.data.delivery_address,
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
          errorMessage: null,
          errorData: null,
        },
      };
    }
    case TYPES.CREATE_ORDER_SUCCESS: {
      return {
        ...state,
        checkout: {
          errorMessage: null,
          errorData: null,
          data: action.payload,
          loading: false,
        },
        basket: {},
        promoCode: {
          ...state.promoCode,
          errorMessage: null,
          data: null,
        },
      };
    }
    case TYPES.CREATE_ORDER_ERROR: {
      return {
        ...state,
        checkout: {
          errorMessage: action.payload.message,
          errorData: action.payload.data,
          data: null,
          loading: false,
        },
      };
    }
    case TYPES.RESET_CREATE_ORDER_ERROR: {
      return {
        ...state,
        checkout: {
          errorMessage: null,
          errorData: null,
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
    case TYPES.REMOVE_DEFAULT_CARD: {
      return {
        ...state,
        defaultCard: {},
      };
    }
    default:
      return state;
  }
}
