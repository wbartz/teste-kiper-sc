import { shallow } from 'enzyme';
import React from 'react';
import EditApartment from './formEditApartment';

describe('EditApartment', () => {
  let wrapper;
  const props = {
    history: {
      push: jest.fn(),
    },
    location: {
      state: {
        apartment_id: 1,
      },
    },
    editApartment: jest.fn(),
    getApartment: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<EditApartment {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
