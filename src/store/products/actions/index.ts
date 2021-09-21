import { ProductsActions, ProductsActionTypes } from './types';

export const getProductsBySubcategory = (id): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY,
  id,
});

export const getProductsBySubcategorySuccess = (id, payload): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS,
  id,
  payload,
});

export const getProductsBySubcategoryError = (id): ProductsActions => ({
  type: ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY_ERROR,
  id,
});
