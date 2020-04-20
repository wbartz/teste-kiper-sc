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
    const error = 'fail';

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
    const error = 'fail';

    const request = AppReducer(undefined, { type: SIGNOUT_REQUEST });
    const success = AppReducer(undefined, { type: SIGNOUT_SUCCESS });
    const failure = AppReducer(undefined, { type: SIGNOUT_FAILURE, error });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('token', null);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });
});
