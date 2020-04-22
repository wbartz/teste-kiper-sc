import { mount } from 'enzyme';
import React from 'react';
import Login from '.';

describe('RouterBackground', () => {
  let wrapper;
  const props = {
    signIn: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };

  beforeEach(() => {
    wrapper = mount(<Login {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('signIn', () => {
    wrapper.find('#username').simulate('change', {
      target: {
        value: 'abc',
      },
    });
    wrapper.find('#password').simulate('change', {
      target: {
        value: 'abc',
      },
    });

    wrapper.find('.btn').simulate('click');
    expect(props.signIn).toBeCalled();
  });
});
