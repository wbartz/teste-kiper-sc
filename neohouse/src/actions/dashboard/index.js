import { fetchAPI, LOG } from '../../helpers';

export const DASHBOARD_REQUEST = 'DASHBOARD_REQUEST';
export const DASHBOARD_SUCCESS = 'DASHBOARD_SUCCESS';
export const DASHBOARD_FAILURE = 'DASHBOARD_FAILURE';

export const getDashboard = () => async (dispatch) => {
  dispatch({ type: DASHBOARD_REQUEST });

  await fetchAPI('/dashboard')
    .then(({ data }) => {
      if (data.type === 'success') {
        dispatch({
          type: DASHBOARD_SUCCESS,
          dashboard: data.dashboard,
        });
        return;
      }

      LOG(DASHBOARD_FAILURE, data.code);
      dispatch({
        type: DASHBOARD_FAILURE,
        error: data.code,
      });
    })
    .catch((error) => {
      LOG(DASHBOARD_FAILURE, error);
      dispatch({
        type: DASHBOARD_FAILURE,
        error,
      });
    });
};
