import { ProductsActionTypes } from '../actions/types';
import { IProductsState } from './types';

const defaultState = {};

export default function products(state: IProductsState = defaultState, action) {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY: {
      return {
        ...state,
        [action.id]: {
          ...(state[action.id] || {}),
          loading: true,
          error: null,
        },
      };
    }
    case ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY_SUCCESS: {
      return {
        ...state,
        [action.id]: {
          data: action.payload.data,
          loading: false,
          error: null,
        },
      };
    }
    case ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY_ERROR: {
      return {
        ...state,
        [action.id]: {
          ...(state[action.id] || {}),
          error: action.payload.message,
          loading: false,
        },
      };
    }
    default:
      return state;
  }
}
