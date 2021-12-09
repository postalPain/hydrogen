import { AppActions, AppActionTypes } from '../actions/types';
import { IAppState } from './types';

const defaultState: IAppState = {
  status: 'start',
  boardingCompleted: false,
  appOptions: null,
  loaderVisibility: false,
};

export default function app(state: IAppState = defaultState, action: AppActions): IAppState {
  switch (action.type) {
    case AppActionTypes.APP_INIT: {
      return {
        ...state,
        status: 'initializing',
      };
    }
    case AppActionTypes.APP_INIT_COMPLETED: {
      return {
        ...state,
        status: 'initialized',
      };
    }
    case AppActionTypes.APP_BOARDING_COMPLETED: {
      return {
        ...state,
        boardingCompleted: true,
      };
    }
    case AppActionTypes.SET_BOARDING_COMPLETED: {
      return {
        ...state,
        boardingCompleted: action.status,
      };
    }
    case AppActionTypes.SAVE_APP_OPTIONS: {
      return {
        ...state,
        appOptions: action.payload,
      };
    }
    case AppActionTypes.SET_APP_LOADER_VISIBILITY: {
      return {
        ...state,
        loaderVisibility: action.visibility,
      };
    }
    default:
      return state;
  }
}
