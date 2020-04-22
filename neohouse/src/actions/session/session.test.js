import { signIn } from '.';

describe('Session actions', () => {
  const dispatch = jest.fn();

  it('signIn', () => {
    signIn('teste', 'teste')(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toHaveProperty(
      'type',
      'EMAIL_SIGNIN_REQUEST'
    );
  });
});
