import { fetchAPI, LOG } from '../../helpers';

export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';
export const DASHBOARD_FAILURE = 'DASHBOARD_FAILURE';

export const getDashboard = (onSuccess) => async (dispatch) => {
  dispatch({ type: DASHBOARD_REQUEST });

  await fetchAPI('/dashboard')
    .then((result) => {
      const { data } = result;
      dispatch({
        type: DASHBOARD_SUCCESS,
        dashboard: data,
      });
      return onSuccess(data);
    })
    .catch((error) => {
      LOG(DASHBOARD_FAILURE, error);
      dispatch({
        type: DASHBOARD_FAILURE,
        error,
      });
    });
};
