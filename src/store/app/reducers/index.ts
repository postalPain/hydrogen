import { AppActions, AppActionTypes } from '../actions/types';
import { IAppState } from './types';

const defaultState: IAppState = {
  status: 'start',
  boardingCompleted: false,
  loaderVisibility: false,
  launchCount: 0,
  lastRatePopupStatus: null,
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
    case AppActionTypes.SET_APP_LOADER_VISIBILITY: {
      return {
        ...state,
        loaderVisibility: action.visibility,
      };
    }
    case AppActionTypes.SET_APP_LAUNCH_COUNT: {
      return {
        ...state,
        launchCount: action.count,
      };
    }
    case AppActionTypes.SET_APP_LAST_RATE_POPUP_STATUS: {
      return {
        ...state,
        lastRatePopupStatus: action.status,
      };
    }
    default:
      return state;
  }
}
