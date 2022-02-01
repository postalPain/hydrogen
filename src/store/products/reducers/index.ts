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
          date: null,
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
          date: Date.now(),
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
          date: null,
          error: action.payload.message,
          loading: false,
        },
      };
    }
    case ProductsActionTypes.INVALIDATE_PRODUCTS: {
      return Object.keys(state).reduce((newProducts, productId) => ({
        ...newProducts,
        [productId]: {
          ...state[productId],
          date: null,
        },
      }), {});
    }
    default:
      return state;
  }
}
