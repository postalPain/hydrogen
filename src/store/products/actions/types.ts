import { IProducts } from 'services/ServerAPI/types';

export enum ProductsActionTypes {
  GET_PRODUCTS_BY_SUBCATEGORY = 'GET_PRODUCTS_BY_SUBCATEGORY',
  GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS = 'GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS',
  GET_PRODUCTS_BY_SUBCATEGORY_ERROR = 'GET_PRODUCTS_BY_SUBCATEGORY_ERROR',
}

export interface IGetProductBySubcategory {
  type: ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY;
  id: string;
}

interface IGetProductsBySubcategorySuccess {
  type: ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY_SUCCESS;
  id: string;
  payload: IProducts;
}

interface IGetProductsBySubcategoryError {
  type: ProductsActionTypes.GET_PRODUCTS_BY_SUBCATEGORY_ERROR;
  id: string;
}

export type ProductsActions = IGetProductBySubcategory | IGetProductsBySubcategorySuccess
| IGetProductsBySubcategoryError;
