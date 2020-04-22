import { shallow } from 'enzyme';
import React from 'react';
import UserMenu from '.';

describe('UserMenu', () => {
  let wrapper;
  const props = {
    logout: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<UserMenu {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('open menu', () => {
    wrapper.find('.nav-user-open').simulate('click');
    expect(wrapper.find('.dropdown-content.active')).toBeTruthy();
  });

  it('close menu', () => {
    wrapper.find('.nav-user-open').simulate('click');
    wrapper.find('.nav-user-open').simulate('click');
    expect(wrapper.find('.dropdown-content.active').exists()).toBe(false);
  });
});
