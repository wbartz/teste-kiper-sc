import { getApartments, removeApartment } from '.';

describe('Apartments actions', () => {
  const dispatch = jest.fn();

  it('getApartments', () => {
    getApartments(1)(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toHaveProperty(
      'type',
      'APARTMENTS_REQUEST'
    );
  });

  it('removeApartment', () => {
    removeApartment(1, () => jest.fn())(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toHaveProperty(
      'type',
      'APARTMENTS_DELETE_REQUEST'
    );
  });
});
