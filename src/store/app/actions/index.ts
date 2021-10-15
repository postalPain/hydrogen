import { AppActions, AppActionTypes } from './types';

export const setBasketVisibility = (visibility: boolean): AppActions => ({
  type: AppActionTypes.APP_SET_BASKET_VISIBILITY,
  visibility,
});
