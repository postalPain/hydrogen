import { getItem } from 'services/LocalStorage';
import { TYPES } from './actions';

const defaultState = {
  accessToken: getItem('AUTH_TOKEN') || '',
  user: null,
  errorMessage: '',
  loading: false,
};

export default function authentication(state = defaultState, action) {
  switch (action.type) {
    case TYPES.SIGN_IN: {
      return {
        ...state,
        loading: true,
      };
    }
    case TYPES.SIGNED_IN: {
      return {
        ...state,
        accessToken: action.payload,
        errorMessage: '',
        loading: false,
      };
    }
    case TYPES.AUTH_ERROR: {
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.errorMessage,
      };
    }
    case TYPES.SIGN_OUT: {
      return {
        ...state,
        accessToken: '',
        user: null,
      };
    }
    case TYPES.GET_USER_SUCCESS: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
}
