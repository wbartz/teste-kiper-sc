export const RESET_ERROR_MESSAGES = 'RESET_ERROR_MESSAGES';

export const clearErrors = () => dispatch => {
  dispatch({ type: RESET_ERROR_MESSAGES });
};
