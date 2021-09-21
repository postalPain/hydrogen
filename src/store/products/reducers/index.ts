import { ProductsActionTypes } from '../actions/types';
import { IProductsState } from './types';

const defaultState = {};

export default function products(state: IProductsState = defaultState, action) {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY: {
      return {
        ...state,
        [action.id]: {
          ...(state[action.id] || {}),
          loading: true,
          error: null,
        },
      };
    }
    case ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS: {
      return {
        ...state,
        [action.id]: {
          data: action.payload.data,
          loading: false,
          error: null,
        },
      };
    }
    case ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY_ERROR: {
      return {
        ...state,
        [action.id]: {
          ...(state[action.id] || {}),
          loading: false,
        },
      };
    }
    default:
      return state;
  }
}
