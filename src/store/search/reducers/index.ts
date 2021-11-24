import { SearchActionTypes } from '../actions/types';
import { ISearchState } from './types';

const defaultState: ISearchState = {
  searchResult: null,
  loading: false,
  error: null,
};

export default function search(state: ISearchState = defaultState, action) {
  switch (action.type) {
    case SearchActionTypes.SEARCH_PRODUCTS: {
      return {
        ...state,
        searchResult: null,
        loading: true,
        error: null,
      };
    }
    case SearchActionTypes.SEARCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        searchResult: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}
