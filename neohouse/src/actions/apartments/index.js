import { fetchAPI, LOG } from '../../helpers';

export const APARTMENTS_REQUEST = 'APARTMENTS_REQUEST';
export const APARTMENTS_SUCCESS = 'APARTMENTS_SUCCESS';
export const APARTMENTS_FAILURE = 'APARTMENTS_FAILURE';
export const APARTMENTS_DELETE_REQUEST = 'APARTMENTS_DELETE_REQUEST';
export const APARTMENTS_DELETE_SUCCESS = 'APARTMENTS_DELETE_SUCCESS';
export const APARTMENTS_DELETE_FAILURE = 'APARTMENTS_DELETE_FAILURE';

export const getApartments = (block_id) => async (dispatch) => {
  dispatch({ type: APARTMENTS_REQUEST });

  await fetchAPI(`/blocks/${block_id}`)
    .then(({ data }) => {
      if(data.type === 'success') {
        dispatch({
          type: APARTMENTS_SUCCESS,
          apartments: data.apartments,
        });
        return;
      }
      dispatch({
        type: APARTMENTS_FAILURE,
        error: data.code,
      });
    })
    .catch((error) => {
      LOG(APARTMENTS_FAILURE, error);
      dispatch({
        type: APARTMENTS_FAILURE,
        error,
      });
    });
};

export const removeApartment = (id, onSuccess) => async (dispatch) => {
  dispatch({type: APARTMENTS_DELETE_REQUEST});

  await fetchAPI(`/apartments/${id}`, 'delete')
    .then(({ data }) => {
      if(data.type === 'success') {
        dispatch({
          type: APARTMENTS_DELETE_SUCCESS,
          apartments: data.apartments,
        });
        return onSuccess();
      }
      dispatch({
        type: APARTMENTS_DELETE_FAILURE,
        error: data.code,
      });
    })
    .catch((error) => {
      LOG(APARTMENTS_DELETE_FAILURE, error);
      dispatch({
        type: APARTMENTS_DELETE_FAILURE,
        error,
      });
    });
}
