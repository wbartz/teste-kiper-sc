import { fetchAPI, LOG, removeCookie, setCookie } from '../../helpers';

export const EMAIL_SIGNIN_REQUEST = 'EMAIL_SIGNIN_REQUEST';
export const EMAIL_SIGNIN_SUCCESS = 'EMAIL_SIGNIN_SUCCESS';
export const EMAIL_SIGNIN_FAILURE = 'EMAIL_SIGNIN_FAILURE';
export const SIGNOUT_REQUEST = 'SIGNOUT_REQUEST';
export const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
export const SIGNOUT_FAILURE = 'SIGNOUT_FAILURE';

export const signOut = (onSuccess) => (dispatch) => {
  dispatch({ type: EMAIL_SIGNIN_REQUEST });
  removeCookie('token');
  dispatch({ type: SIGNOUT_SUCCESS });
  return onSuccess();
};

export const signIn = (username, password, onSuccess) => async (dispatch) => {
  dispatch({ type: EMAIL_SIGNIN_REQUEST });

  await fetchAPI('/login', 'post', { username, password })
    .then((result) => {
      const { data } = result;
      setCookie('token', data.token);
      setCookie('user', data.user);
      dispatch({
        type: EMAIL_SIGNIN_SUCCESS,
        token: data.token,
      });
      return onSuccess();
    })
    .catch((error) => {
      LOG(EMAIL_SIGNIN_FAILURE, error.message);
      dispatch({
        type: EMAIL_SIGNIN_FAILURE,
        error: error.message,
      });
    });
};
