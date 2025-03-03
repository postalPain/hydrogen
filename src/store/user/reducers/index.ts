import { TYPES, TBasketProduct } from '../actions';
import { TPromoCode, IOrderCreated, TUser } from 'services/ServerAPI/types';
import { ICard, IOrder, IDeliveryAddress } from 'store/user/reducers/types';

interface IUserState {
  accessToken: string;
  user: TUser | null;
  errorMessage: string;
  loading: boolean;
  defaultCard: ICard | {};
  addressDeliverySaveRequest: {
    loading: boolean;
    errorMessage: string | null;
  }
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
  requestPhoneVerification: {
    loading: boolean;
    data: string | null;
    errorMessage: string | null;
  },
  phoneVerification: {
    loading: boolean;
    data: string | null;
    errorMessage: string | null;
  }
}

const defaultState: IUserState = {
  accessToken: '',
  user: null,
  errorMessage: '',
  loading: false,
  defaultCard: {},
  addressDeliverySaveRequest: {
    loading: false,
    errorMessage: null,
  },
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
  requestPhoneVerification: {
    loading: false,
    data: null,
    errorMessage: null,
  },
  phoneVerification: {
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
    case TYPES.SAVE_ADDRESS:
    case TYPES.SAVE_ADDRESS_LOADING: {
      return {
        ...state,
        addressDeliverySaveRequest: {
          loading: true,
          errorMessage: null,
        },
      };
    }
    case TYPES.SAVE_ADDRESS_SUCCESS: {
      return {
        ...state,
        addressDeliverySaveRequest: {
          loading: false,
          errorMessage: null,
        },
        user: {
          ...state.user,
          delivery_address: action.payload,
        },
      };
    }
    case TYPES.SAVE_ADDRESS_ERROR: {
      return {
        ...state,
        addressDeliverySaveRequest: {
          loading: false,
          errorMessage: action.payload,
        },
      };
    }
    case TYPES.SAVE_ADDRESS_CLEAR_ERROR: {
      return {
        ...state,
        addressDeliverySaveRequest: {
          ...state.addressDeliverySaveRequest,
          errorMessage: null,
        },
      };
    }
    case TYPES.SET_ADDRESS: {
      return {
        ...state,
        user: {
          ...state.user,
          delivery_address: action.payload,
        },
      };
    }
    case TYPES.SET_TEMPORARY_ADDRESS: {
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
    case TYPES.SIGN_UP: {
      return {
        ...state,
        loading: true,
        errorMessage: '',
      };
    }
    case TYPES.REQUEST_PHONE_VERIFICATION: {
      return {
        ...state,
        requestPhoneVerification: {
          loading: true,
          data: null,
          errorMessage: '',
        },
      };
    }
    case TYPES.REQUEST_PHONE_VERIFICATION_SUCCESS: {
      return {
        ...state,
        requestPhoneVerification: {
          loading: false,
          data: 'ok',
          errorMessage: '',
        },
      };
    }
    case TYPES.REQUEST_PHONE_VERIFICATION_ERROR: {
      return {
        ...state,
        requestPhoneVerification: {
          data: null,
          loading: false,
          errorMessage: action.payload,
        },
      };
    }
    case TYPES.REQUEST_PHONE_VERIFICATION_CLEAR: {
      return {
        ...state,
        requestPhoneVerification: {
          data: null,
          loading: false,
          errorMessage: '',
        },
      };
    }
    case TYPES.VERIFY_PHONE: {
      return {
        ...state,
        phoneVerification: {
          data: null,
          loading: true,
          errorMessage: '',
        },
      };
    }
    case TYPES.VERIFY_PHONE_SUCCESS: {
      return {
        ...state,
        phoneVerification: {
          data: 'ok',
          loading: false,
          errorMessage: '',
        },
      };
    }
    case TYPES.VERIFY_PHONE_ERROR: {
      return {
        ...state,
        phoneVerification: {
          data: null,
          loading: false,
          errorMessage: action.payload,
        },
      };
    }
    case TYPES.VERIFY_PHONE_CLEAR: {
      return {
        ...state,
        phoneVerification: {
          data: null,
          loading: false,
          errorMessage: '',
        },
      };
    }
    default:
      return state;
  }
}
