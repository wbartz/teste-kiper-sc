import { clearErrors } from '.';

describe('Status actions', () => {
  const dispatch = jest.fn();

  it('clearErrors', () => {
    clearErrors()(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toHaveProperty(
      'type',
      'RESET_ERROR_MESSAGES'
    );
  });
});
