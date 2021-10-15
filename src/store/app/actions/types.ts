export enum AppActionTypes {
  APP_SET_BASKET_VISIBILITY = 'APP_SET_BASKET_VISIBILITY',
}

interface SetBasketVisibility {
  type: AppActionTypes.APP_SET_BASKET_VISIBILITY,
  visibility: boolean,
}

export type AppActions = SetBasketVisibility;
