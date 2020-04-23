import { fetchAPI, LOG } from '../../helpers';

export const RESIDENTS_REQUEST = 'RESIDENTS_REQUEST';
export const RESIDENTS_SUCCESS = 'RESIDENTS_SUCCESS';
export const RESIDENTS_FAILURE = 'RESIDENTS_FAILURE';
export const RESIDENTS_DELETE_REQUEST = 'RESIDENTS_DELETE_REQUEST';
export const RESIDENTS_DELETE_SUCCESS = 'RESIDENTS_DELETE_SUCCESS';
export const RESIDENTS_DELETE_FAILURE = 'RESIDENTS_DELETE_FAILURE';

export const getResidents = (apartment_id) => async (dispatch) => {
  dispatch({ type: RESIDENTS_REQUEST });

  await fetchAPI(`/residents/${apartment_id}`)
    .then(({ data }) => {
      if(data.type === 'success') {
        dispatch({
          type: RESIDENTS_SUCCESS,
          residents: data.residents,
        });
        return;
      }
      dispatch({
        type: RESIDENTS_FAILURE,
        error: data.code,
      });
    })
    .catch((error) => {
      LOG(RESIDENTS_FAILURE, error);
      dispatch({
        type: RESIDENTS_FAILURE,
        error,
      });
    });
};

export const removeApartment = (id, onSuccess) => async (dispatch) => {
  dispatch({type: RESIDENTS_DELETE_REQUEST});

  await fetchAPI(`/residents/${id}`, 'delete')
    .then(({ data }) => {
      if(data.type === 'success') {
        dispatch({
          type: RESIDENTS_DELETE_SUCCESS,
          apartments: data.apartments,
        });
        return onSuccess();
      }
      dispatch({
        type: RESIDENTS_DELETE_FAILURE,
        error: data.code,
      });
    })
    .catch((error) => {
      LOG(RESIDENTS_DELETE_FAILURE, error);
      dispatch({
        type: RESIDENTS_DELETE_FAILURE,
        error,
      });
    });
}
