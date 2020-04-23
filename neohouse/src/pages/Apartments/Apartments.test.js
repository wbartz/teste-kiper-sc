import { shallow } from 'enzyme';
import React from 'react';
import Apartments from '.';

describe('Apartments', () => {
  const props = {
    getApartments: jest.fn(),
    removeApartment: jest.fn(),
    location: {
      state: {
        block: 1,
      },
    },
    history: {
      push: jest.fn(),
    },
  };

  it('render without crashing', () => {
    expect(shallow(<Apartments {...props} />)).toMatchSnapshot();
  });
});
