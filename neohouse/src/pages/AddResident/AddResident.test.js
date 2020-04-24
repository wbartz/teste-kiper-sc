import { shallow } from 'enzyme';
import React from 'react';
import AddResident from './formAddResident';

describe('AddResident', () => {
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
    addResident: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<AddResident {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
