import { AppActionTypes } from '../actions/types';
import { IAppState } from './types';

const defaultState = {
  basketVisible: false,
};

export default function app(state: IAppState = defaultState, action) {
  switch (action.type) {
    case AppActionTypes.APP_SET_BASKET_VISIBILITY: {
      return {
        ...state,
        basketVisible: action.visibility,
      };
    }
    default:
      return state;
  }
}
