import { shallow } from 'enzyme';
import React from 'react';
import Success from './success';

describe('Success', () => {
  let wrapper;
  const props = {
    onClose: jest.fn(),
    show: false,
  };

  beforeEach(() => {
    wrapper = shallow(<Success {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
