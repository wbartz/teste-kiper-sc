import { fetchAPI, LOG, removeCookie, setCookie } from '../../helpers';

export const EMAIL_SIGNIN_REQUEST = 'EMAIL_SIGNIN_REQUEST';
export const EMAIL_SIGNIN_SUCCESS = 'EMAIL_SIGNIN_SUCCESS';
export const EMAIL_SIGNIN_FAILURE = 'EMAIL_SIGNIN_FAILURE';
export const SIGNOUT_REQUEST = 'SIGNOUT_REQUEST';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_FAILURE = 'SIGNOUT_FAILURE';

export const signOut = onSuccess => dispatch => {
  dispatch({ type: EMAIL_SIGNIN_REQUEST });
  removeCookie('token');
  dispatch({ type: SIGNOUT_SUCCESS });
  return onSuccess();
};

export const signIn = (username, password, onSuccess) => async dispatch => {
  dispatch({ type: EMAIL_SIGNIN_REQUEST });

  const credentials = btoa(`${username}:${password}`);
  const authHeaders = {
    Authorization: `Basic ${credentials}`,
  };

  await fetchAPI('login', 'post', null, authHeaders)
    .then(({ headers }) => {
      setCookie('token', headers.authorization);
      dispatch({
        type: EMAIL_SIGNIN_SUCCESS,
        token: headers.authorization,
      });
      return onSuccess();
    })
    .catch(error => {
      LOG(EMAIL_SIGNIN_FAILURE, error.message);
      dispatch({
        type: EMAIL_SIGNIN_FAILURE,
        error: error.message,
      });
    });
};
