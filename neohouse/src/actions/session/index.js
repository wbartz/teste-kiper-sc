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
  removeCookie('user');
  dispatch({ type: SIGNOUT_SUCCESS });
  return onSuccess();
};

export const signIn = (username, password, onSuccess) => async (dispatch) => {
  dispatch({ type: EMAIL_SIGNIN_REQUEST });

  await fetchAPI('/login', 'post', { username, password })
    .then(({ data }) => {
      if (data.type === 'success') {
        setCookie('token', data.token);
        setCookie('user', data.user);
        dispatch({
          type: EMAIL_SIGNIN_SUCCESS,
          token: data.token,
        });
        return onSuccess();
      }
      LOG(EMAIL_SIGNIN_FAILURE, data.code);
      dispatch({
        type: EMAIL_SIGNIN_FAILURE,
        error: data.code,
      });
    })
    .catch((error) => {
      LOG(EMAIL_SIGNIN_FAILURE, error);
      dispatch({
        type: EMAIL_SIGNIN_FAILURE,
        error,
      });
    });
};
