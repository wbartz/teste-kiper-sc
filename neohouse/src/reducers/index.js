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
import {
  APARTMENTS_REQUEST,
  APARTMENTS_SUCCESS,
  APARTMENTS_FAILURE,
  APARTMENTS_DELETE_REQUEST,
  APARTMENTS_DELETE_SUCCESS,
  APARTMENTS_DELETE_FAILURE,
  CHANGE_APARTMENTS_REQUEST,
  CHANGE_APARTMENTS_SUCCESS,
  CHANGE_APARTMENTS_FAILURE,
} from '../actions/apartments';
import {
  RESIDENTS_REQUEST,
  RESIDENTS_SUCCESS,
  RESIDENTS_FAILURE,
  RESIDENTS_DELETE_REQUEST,
  RESIDENTS_DELETE_SUCCESS,
  RESIDENTS_DELETE_FAILURE,
} from '../actions/residents';

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
    case CHANGE_APARTMENTS_REQUEST:
    case RESIDENTS_DELETE_REQUEST:
    case RESIDENTS_REQUEST:
    case APARTMENTS_DELETE_REQUEST:
    case APARTMENTS_REQUEST:
    case DASHBOARD_REQUEST:
    case SIGNOUT_REQUEST:
    case EMAIL_SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHANGE_APARTMENTS_FAILURE:
    case RESIDENTS_DELETE_FAILURE:
    case RESIDENTS_FAILURE:
    case APARTMENTS_DELETE_FAILURE:
    case APARTMENTS_FAILURE:
    case DASHBOARD_FAILURE:
    case SIGNOUT_FAILURE:
    case EMAIL_SIGNIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: getMessage(action.error),
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
      return {
        ...state,
        isLoading: false,
        dashboard: action.dashboard,
      };
    case APARTMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        apartments: action.apartments,
      };
    case RESIDENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        residents: action.residents,
      }
    case RESET_ERROR_MESSAGES:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case CHANGE_APARTMENTS_SUCCESS:
    case APARTMENTS_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case RESIDENTS_DELETE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    default:
      return state;
  }
};
