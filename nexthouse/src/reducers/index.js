import {
  EMAIL_SIGNIN_FAILURE,
  EMAIL_SIGNIN_REQUEST,
  EMAIL_SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
} from '../actions/session';
import { RESET_ERROR_MESSAGES } from '../actions/status';

export const initialState = {
  isLoading: false,
  error: null,
  user: null,
  token: null,
};

export default (state = initialState, { type, ...action }) => {
  switch (type) {
    case SIGNOUT_REQUEST:
    case EMAIL_SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNOUT_FAILURE:
    case EMAIL_SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case EMAIL_SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.token,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: null,
      };
    case RESET_ERROR_MESSAGES:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
