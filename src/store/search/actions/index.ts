import { SearchActionTypes } from 'store/search/actions/types';
import { TProduct } from 'services/ServerAPI/types';

export const searchProducts = (searchText: string) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS,
  payload: searchText,
});

export const searchProductsSuccess = (products: TProduct[]) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const searchProductsError = (error: string) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS_ERROR,
  payload: error,
});
