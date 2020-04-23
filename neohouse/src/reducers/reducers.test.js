import AppReducer from '.';
import {
  EMAIL_SIGNIN_FAILURE,
  EMAIL_SIGNIN_REQUEST,
  EMAIL_SIGNIN_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
} from '../actions/session';
import { RESET_ERROR_MESSAGES } from '../actions/status';
import {
  DASHBOARD_REQUEST,
  DASHBOARD_SUCCESS,
  DASHBOARD_FAILURE,
} from '../actions/dashboard';
import {
  APARTMENTS_REQUEST,
  APARTMENTS_SUCCESS,
  APARTMENTS_FAILURE,
  APARTMENTS_DELETE_REQUEST,
  APARTMENTS_DELETE_SUCCESS,
  APARTMENTS_DELETE_FAILURE,
} from '../actions/apartments';
import {
  RESIDENTS_REQUEST,
  RESIDENTS_SUCCESS,
  RESIDENTS_FAILURE,
  RESIDENTS_DELETE_REQUEST,
  RESIDENTS_DELETE_SUCCESS,
  RESIDENTS_DELETE_FAILURE,
} from '../actions/residents';

describe('Status Actions', () => {
  it('faultback to a initial state', () => {
    expect(AppReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('Clear message errors', () => {
    const request = AppReducer(undefined, { type: RESET_ERROR_MESSAGES });

    expect(request).toHaveProperty('error', null);
  });
});

describe('Session Actions', () => {
  it('faultback to a initial state', () => {
    expect(AppReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('signIn', () => {
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';

    const request = AppReducer(undefined, { type: EMAIL_SIGNIN_REQUEST });
    const success = AppReducer(undefined, {
      type: EMAIL_SIGNIN_SUCCESS,
      token: 'abc',
    });
    const failure = AppReducer(undefined, {
      type: EMAIL_SIGNIN_FAILURE,
      error,
    });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('isLoading', false);
    expect(success).toHaveProperty('token', 'abc');

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });

  it('signOut', () => {
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';

    const request = AppReducer(undefined, { type: SIGNOUT_REQUEST });
    const success = AppReducer(undefined, { type: SIGNOUT_SUCCESS });
    const failure = AppReducer(undefined, { type: SIGNOUT_FAILURE, error });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('token', null);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });
});

describe('Dashboard actions', () => {
  it('faultback to a initial state', () => {
    expect(AppReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('getDashboard', () => {
    const error = 'fail';
    const request = AppReducer(undefined, { type: DASHBOARD_REQUEST });
    const success = AppReducer(undefined, {
      type: DASHBOARD_SUCCESS,
      dashboard: [],
    });
    const failure = AppReducer(undefined, {
      type: DASHBOARD_FAILURE,
      error,
    });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('isLoading', false);
    expect(success).toHaveProperty('dashboard', []);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });
});
