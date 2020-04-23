import { shallow } from 'enzyme';
import React from 'react';
import Residents from '.';

describe('Residents', () => {
  const props = {
    getResidents: jest.fn(),
    removeResident: jest.fn(),
    location: {
      state: {
        apartment: 1
      },
    },
    history: {
      push: jest.fn(),
    },
  };

  it('render without crashing', () => {
    expect(shallow(<Residents {...props} />)).toMatchSnapshot();
  });
});
