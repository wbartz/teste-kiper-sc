import { shallow, mount } from 'enzyme';
import React from 'react';
import {UserMenuComponent as UserMenu} from '.';

describe('UserMenu', () => {
  let wrapper;
  const props = {
    signOut: jest.fn(),
    onLogout: jest.fn(),
  };

  beforeEach(() => {
    wrapper = mount(<UserMenu {...props} />);
  });

  it('render without crashing', () => {
    expect(shallow(<UserMenu {...props} />)).toMatchSnapshot();
  });

  it('open menu', () => {
    wrapper.find('.nav-user-open.btn-link').simulate('click');
    expect(wrapper.find('.dropdown-content.active')).toBeTruthy();
  });

  it('close menu', () => {
    wrapper.find('.nav-user-open.btn-link').simulate('click');
    wrapper.find('.nav-user-open.btn-link').simulate('click');
    expect(wrapper.find('.dropdown-content.active').exists()).toBe(false);
  });

  it('signOut click', () => {
    wrapper.find('.nav-user-open.btn-link').simulate('click');
    wrapper.find('.mdc-button.link').simulate('click');
    expect(props.signOut).toHaveBeenCalled();
  })
});
