import { fetchAPI, LOG } from '../../helpers';

export const APARTMENTS_REQUEST = 'APARTMENTS_REQUEST';
export const APARTMENTS_SUCCESS = 'APARTMENTS_SUCCESS';
export const APARTMENTS_FAILURE = 'APARTMENTS_FAILURE';
export const CHANGE_APARTMENTS_REQUEST = 'CHANGE_APARTMENTS_REQUEST';
export const CHANGE_APARTMENTS_SUCCESS = 'CHANGE_APARTMENTS_SUCCESS';
export const CHANGE_APARTMENTS_FAILURE = 'CHANGE_APARTMENTS_FAILURE';
export const APARTMENTS_DELETE_REQUEST = 'APARTMENTS_DELETE_REQUEST';
export const APARTMENTS_DELETE_SUCCESS = 'APARTMENTS_DELETE_SUCCESS';
export const APARTMENTS_DELETE_FAILURE = 'APARTMENTS_DELETE_FAILURE';

export const getApartments = (block_id,number = null) => async (dispatch) => {
  dispatch({ type: APARTMENTS_REQUEST });

  await fetchAPI(`/blocks/${block_id}${number ? `/${number}` : ''}`)
    .then(({ data }) => {
      if (data.type === 'success') {
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

export const getApartment = (apartment_id, onSuccess) => async (dispatch) => {
  dispatch({ type: APARTMENTS_REQUEST });

  await fetchAPI(`/apartments/${apartment_id}`)
    .then(({ data }) => {
      if (data.type === 'success') {
        dispatch({
          type: APARTMENTS_SUCCESS,
          apartments: data.apartment,
        });
        return onSuccess(data.apartment);
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
  dispatch({ type: APARTMENTS_DELETE_REQUEST });

  await fetchAPI(`/apartments/${id}`, 'delete')
    .then(({ data }) => {
      if (data.type === 'success') {
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
};

export const addApartment = (body, onSuccess) => async (dispatch) => {
  dispatch({ type: CHANGE_APARTMENTS_REQUEST });

  await fetchAPI(`/apartments/`, 'post', body)
    .then(({ data }) => {
      if (data.type === 'success') {
        dispatch({
          type: CHANGE_APARTMENTS_SUCCESS,
          apartment: data.apartment,
        });
        return onSuccess(data.apartment);
      }
      dispatch({
        type: CHANGE_APARTMENTS_FAILURE,
        error: data.code,
      });
    })
    .catch((error) => {
      LOG(CHANGE_APARTMENTS_FAILURE, error);
      dispatch({
        type: CHANGE_APARTMENTS_FAILURE,
        error,
      });
    });
};

export const editApartment = (id, body, onSuccess) => async (dispatch) => {
  dispatch({ type: CHANGE_APARTMENTS_REQUEST });

  await fetchAPI(`/apartments/${id}`, 'post', body)
    .then(({ data }) => {
      if (data.type === 'success') {
        dispatch({
          type: CHANGE_APARTMENTS_SUCCESS,
          apartment: data.apartment,
        });
        return onSuccess(data.apartment);
      }
      dispatch({
        type: CHANGE_APARTMENTS_FAILURE,
        error: data.code,
      });
    })
    .catch((error) => {
      LOG(CHANGE_APARTMENTS_FAILURE, error);
      dispatch({
        type: CHANGE_APARTMENTS_FAILURE,
        error,
      });
    });
};
