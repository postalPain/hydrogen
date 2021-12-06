import { ISubcategoryProducts } from 'services/ServerAPI/types';

export enum ProductsActionTypes {
  GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY',
  GET_PRODUCTS_BY_CATEGORY_SUCCESS = 'GET_PRODUCTS_BY_CATEGORY_SUCCESS',
  GET_PRODUCTS_BY_CATEGORY_ERROR = 'GET_PRODUCTS_BY_CATEGORY_ERROR',
}

interface IGetProductsByCategoryErrorPayload {
  message: string;
}

export interface IGetProductByCategory {
  type: ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY;
  id: string;
}

interface IGetProductsByCategorySuccess {
  type: ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY_SUCCESS;
  id: string;
  payload: ISubcategoryProducts[];
}

interface IGetProductsByCategoryError {
  type: ProductsActionTypes.GET_PRODUCTS_BY_CATEGORY_ERROR;
  id: string;
  payload: IGetProductsByCategoryErrorPayload;
}

export type ProductsActions = IGetProductByCategory | IGetProductsByCategorySuccess
| IGetProductsByCategoryError;
