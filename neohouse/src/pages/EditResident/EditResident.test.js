import { shallow } from 'enzyme';
import React from 'react';
import EditResident from './formEditResident';

describe('EditResident', () => {
  let wrapper;
  const props = {
    history: {
      push: jest.fn(),
    },
    location: {
      state: {
        block_id: 1,
        apartment_id: 1,
      }
    },
    getResident: jest.fn(),
    editResident: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<EditResident {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
