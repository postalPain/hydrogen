import { CategoriesActions, CategoriesActionTypes } from './types';

export const getCategories = (): CategoriesActions => ({
  type: CategoriesActionTypes.GET_CATEGORIES,
});

export const getCategoriesSuccess = (payload): CategoriesActions => ({
  type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS,
  payload,
});

export const getCategoriesError = (): CategoriesActions => ({
  type: CategoriesActionTypes.GET_CATEGORIES_ERROR,
});

export const setCurrentSubcategory = (id): CategoriesActions => ({
  type: CategoriesActionTypes.SET_CURRENT_SUBCATEGORY,
  id,
});
