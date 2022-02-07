import { SearchActionTypes } from '../actions/types';
import { ISearchState } from './types';

const defaultState: ISearchState = {
  searchResult: null,
  loading: false,
  error: null,
  lastPage: null,
  nextPageError: null,
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
        lastPage: action.meta,
      };
    }
    case SearchActionTypes.SEARCH_PRODUCTS_NEXT_PAGE_SUCCESS: {
      return {
        ...state,
        searchResult: [...state.searchResult, ...action.payload],
      };
    }
    case SearchActionTypes.SEARCH_PRODUCTS_NEXT_PAGE_ERROR: {
      return {
        ...state,
        nextPageError: action.payload,
      };
    }
    default:
      return state;
  }
}
