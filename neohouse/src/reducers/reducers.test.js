import AppReducer from '.';
import { APARTMENTS_DELETE_FAILURE, APARTMENTS_DELETE_REQUEST, APARTMENTS_DELETE_SUCCESS, APARTMENTS_FAILURE, APARTMENTS_REQUEST, APARTMENTS_SUCCESS, CHANGE_APARTMENTS_FAILURE, CHANGE_APARTMENTS_REQUEST, CHANGE_APARTMENTS_SUCCESS } from '../actions/apartments';
import { DASHBOARD_FAILURE, DASHBOARD_REQUEST, DASHBOARD_SUCCESS } from '../actions/dashboard';
import { CHANGE_RESIDENTS_FAILURE, CHANGE_RESIDENTS_REQUEST, CHANGE_RESIDENTS_SUCCESS, RESIDENTS_DELETE_FAILURE, RESIDENTS_DELETE_REQUEST, RESIDENTS_DELETE_SUCCESS, RESIDENTS_FAILURE, RESIDENTS_REQUEST, RESIDENTS_SUCCESS } from '../actions/residents';
import { EMAIL_SIGNIN_FAILURE, EMAIL_SIGNIN_REQUEST, EMAIL_SIGNIN_SUCCESS, SIGNOUT_FAILURE, SIGNOUT_REQUEST, SIGNOUT_SUCCESS } from '../actions/session';
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
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';
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

describe('Apartments actions', () => {
  it('faultback to a initial state', () => {
    expect(AppReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('getApartments', () => {
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';
    const request = AppReducer(undefined, { type: APARTMENTS_REQUEST });
    const success = AppReducer(undefined, {
      type: APARTMENTS_SUCCESS,
      dashboard: [],
    });
    const failure = AppReducer(undefined, {
      type: APARTMENTS_FAILURE,
      error,
    });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('isLoading', false);
    expect(success).toHaveProperty('dashboard', []);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });

  it('editApartments/addApartments', () => {
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';
    const request = AppReducer(undefined, { type: CHANGE_APARTMENTS_REQUEST });
    const success = AppReducer(undefined, {
      type: CHANGE_APARTMENTS_SUCCESS,
      dashboard: [],
    });
    const failure = AppReducer(undefined, {
      type: CHANGE_APARTMENTS_FAILURE,
      error,
    });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('isLoading', false);
    expect(success).toHaveProperty('dashboard', []);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });

  it('removeApartment', () => {
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';
    const request = AppReducer(undefined, { type: APARTMENTS_DELETE_REQUEST });
    const success = AppReducer(undefined, {
      type: APARTMENTS_DELETE_SUCCESS,
      dashboard: [],
    });
    const failure = AppReducer(undefined, {
      type: APARTMENTS_DELETE_FAILURE,
      error,
    });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('isLoading', false);
    expect(success).toHaveProperty('dashboard', []);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });
});

describe('Residents actions', () => {
  it('faultback to a initial state', () => {
    expect(AppReducer(undefined, { type: null })).toMatchSnapshot();
  });

  it('getResidents', () => {
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';
    const request = AppReducer(undefined, { type: RESIDENTS_REQUEST });
    const success = AppReducer(undefined, {
      type: RESIDENTS_SUCCESS,
      dashboard: [],
    });
    const failure = AppReducer(undefined, {
      type: RESIDENTS_FAILURE,
      error,
    });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('isLoading', false);
    expect(success).toHaveProperty('dashboard', []);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });

  it('editResidents/addResidents', () => {
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';
    const request = AppReducer(undefined, { type: CHANGE_RESIDENTS_REQUEST });
    const success = AppReducer(undefined, {
      type: CHANGE_RESIDENTS_SUCCESS,
      dashboard: [],
    });
    const failure = AppReducer(undefined, {
      type: CHANGE_RESIDENTS_FAILURE,
      error,
    });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('isLoading', false);
    expect(success).toHaveProperty('dashboard', []);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });

  it('removeResident', () => {
    const error = 'Ocorreu um erro durante a requisição. Por favor tente novamente!';
    const request = AppReducer(undefined, { type: RESIDENTS_DELETE_REQUEST });
    const success = AppReducer(undefined, {
      type: RESIDENTS_DELETE_SUCCESS,
      dashboard: [],
    });
    const failure = AppReducer(undefined, {
      type: RESIDENTS_DELETE_FAILURE,
      error,
    });

    expect(request).toHaveProperty('isLoading', true);

    expect(success).toHaveProperty('isLoading', false);
    expect(success).toHaveProperty('dashboard', []);

    expect(failure).toHaveProperty('isLoading', false);
    expect(failure).toHaveProperty('error', error);
  });
});