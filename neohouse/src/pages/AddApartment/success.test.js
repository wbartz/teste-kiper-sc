import { shallow } from 'enzyme';
import React from 'react';
import Success from './success';

describe('Success', () => {
  let wrapper;
  const props = {
    history: {
      go: jest.fn(),
    },
    onClose: jest.fn(),
    user: {},
    show: false,
  };

  beforeEach(() => {
    wrapper = shallow(<Success {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
