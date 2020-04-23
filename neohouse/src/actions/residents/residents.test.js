import { getResidents } from '.';

describe('Residents actions', () => {
  const dispatch = jest.fn();

  it('getResidents', () => {
    getResidents(1)(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toHaveProperty(
      'type',
      'RESIDENTS_REQUEST'
    );
  });
});
