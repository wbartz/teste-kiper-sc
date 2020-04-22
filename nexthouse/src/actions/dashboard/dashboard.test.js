import { getDashboard } from '.';

describe('Dashboard actions', () => {
  const dispatch = jest.fn();

  it('getDashboard', () => {
    getDashboard()(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toHaveProperty(
      'type',
      'DASHBOARD_REQUEST'
    );
  });
});
