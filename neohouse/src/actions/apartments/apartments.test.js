import { getApartments, removeApartment, addApartment, getApartment, editApartment } from '.';

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
    expect(dispatch.mock.calls[1][0]).toHaveProperty(
      'type',
      'APARTMENTS_DELETE_REQUEST'
    );
  });

  it('getApartment', () => {
    getApartment(1, () => jest.fn())(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[0][0]).toHaveProperty(
      'type',
      'APARTMENTS_REQUEST'
    );
  });

  it('addApartment', () => {
    addApartment(1, () => jest.fn())(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[3][0]).toHaveProperty(
      'type',
      'CHANGE_APARTMENTS_REQUEST'
    );
  });

  it('editApartment', () => {
    editApartment(1, () => jest.fn())(dispatch);

    expect(dispatch).toBeCalled();
    expect(dispatch.mock.calls[4][0]).toHaveProperty(
      'type',
      'CHANGE_APARTMENTS_REQUEST'
    );
  });
});
