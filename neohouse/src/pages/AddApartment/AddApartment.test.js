import { shallow } from 'enzyme';
import React from 'react';
import FormAddApartment from './formAddApartment';

describe('FormAddApartment', () => {
  const props = {
    history: {
      push: jest.fn(),
    },
    location: {
      state: {
        block_id: 1,
      },
    },
    addApartment: jest.fn(),
  };
  const wrapper = shallow(<FormAddApartment {...props} />);

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
