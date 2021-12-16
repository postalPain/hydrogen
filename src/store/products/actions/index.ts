import { ProductsActions, ProductsActionTypes } from './types';

export const getProductsByCategory = (id): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY,
  id,
});

export const getProductsByCategorySuccess = (id, payload): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY_SUCCESS,
  id,
  payload,
});

export const getProductsByCategoryError = (id, payload): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY_ERROR,
  id,
  payload,
});
