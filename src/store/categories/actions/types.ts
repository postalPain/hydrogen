import { ICategories } from 'services/ServerAPI/types';

export enum CategoriesActionTypes {
  GET_CATEGORIES = 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR',
}

interface GetCategoriesActionType {
  type: CategoriesActionTypes.GET_CATEGORIES,
}

interface GetCategoriesSuccessActionType {
  type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS,
  payload: ICategories,
}

interface GetCategoriesErrorActionType {
  type: CategoriesActionTypes.GET_CATEGORIES_ERROR,
}

export type CategoriesActions = GetCategoriesActionType | GetCategoriesSuccessActionType
| GetCategoriesErrorActionType;
