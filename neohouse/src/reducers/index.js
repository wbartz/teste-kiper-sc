import { getMessage, LOG } from '../helpers';
import {
  EMAIL_SIGNIN_FAILURE,
  EMAIL_SIGNIN_REQUEST,
  EMAIL_SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
} from '../actions/session';
import {
  DASHBOARD_REQUEST,
  DASHBOARD_SUCCESS,
  DASHBOARD_FAILURE,
} from '../actions/dashboard';
import { RESET_ERROR_MESSAGES } from '../actions/status';

export const initialState = {
  isLoading: false,
  error: null,
  user: null,
  token: null,
  dashboard: [],
};

export default (state = initialState, { type, ...action }) => {
  LOG(type);
  switch (type) {
    case DASHBOARD_REQUEST:
    case SIGNOUT_REQUEST:
    case EMAIL_SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case DASHBOARD_FAILURE:
    case SIGNOUT_FAILURE:
    case EMAIL_SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: getMessage(action.error.code),
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
    case DASHBOARD_SUCCESS:
      LOG(action)
      return {
        ...state,
        isLoading: false,
        dashboard: action.dashboard,
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
