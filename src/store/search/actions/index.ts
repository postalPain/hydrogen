import { SearchActionTypes } from 'store/search/actions/types';
import { TProduct } from 'services/ServerAPI/types';

export const searchProducts = (searchText: string) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS,
  payload: searchText,
});

export const searchProductsSuccess = (products: TProduct[], lastPage: number) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS_SUCCESS,
  payload: products,
  meta: lastPage,
});

export const searchProductsError = (error: string) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS_ERROR,
  payload: error,
});

export const searchProductsNextPage = (searchText: string, page: number) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS_NEXT_PAGE,
  payload: searchText,
  meta: { page },
});

export const searchProductsNextPageSuccess = (products: TProduct[]) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS_NEXT_PAGE_SUCCESS,
  payload: products,
});

export const searchProductsNextPageError = (error: string) => ({
  type: SearchActionTypes.SEARCH_PRODUCTS_NEXT_PAGE_ERROR,
  payload: error,
});
