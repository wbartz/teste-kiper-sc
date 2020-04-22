import { shallow } from 'enzyme';
import React from 'react';
import { AlertComponent } from '.';

describe('Alert', () => {
  let wrapper;
  const props = {
    clearErrors: jest.fn(),
  };

  beforeEach(() => {
    wrapper = shallow(<AlertComponent {...props} />); // eslint-disable-line
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('test clearErrors', () => {
    wrapper.find('.mdc-button').simulate('click');
    expect(props.clearErrors).toHaveBeenCalled();
  });
});
