import { CategoriesActionTypes } from '../actions/types';
import { ICategoriesState } from './types';

const defaultState = {
  data: null,
  loading: false,
  currentSubcategory: null,
};

export default function categories(state: ICategoriesState = defaultState, action) {
  switch (action.type) {
    case CategoriesActionTypes.GET_CATEGORIES: {
      return {
        ...state,
        loading: true,
      };
    }
    case CategoriesActionTypes.GET_CATEGORIES_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    }
    case CategoriesActionTypes.GET_CATEGORIES_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case CategoriesActionTypes.SET_CURRENT_SUBCATEGORY: {
      return {
        ...state,
        currentSubcategory: action.id,
      };
    }
    default:
      return state;
  }
}
