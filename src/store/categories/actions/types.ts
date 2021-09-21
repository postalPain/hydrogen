import { ICategories } from 'services/ServerAPI/types';

export enum CategoriesActionTypes {
  GET_CATEGORIES = 'GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR',
  SET_CURRENT_SUBCATEGORY = 'SET_CURRENT_SUBCATEGORY',
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

interface SetCurrentSubcategoryActionType {
  type: CategoriesActionTypes.SET_CURRENT_SUBCATEGORY,
  id: string;
}

export type CategoriesActions = GetCategoriesActionType | GetCategoriesSuccessActionType
| GetCategoriesErrorActionType | SetCurrentSubcategoryActionType;
