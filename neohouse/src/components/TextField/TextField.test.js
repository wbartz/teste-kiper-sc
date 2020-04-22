import { shallow } from 'enzyme';
import React from 'react';
import TextField from '.';

describe('TextField', () => {
  const props = {
    value: '',
    type: 'text',
    name: 'TextField',
    onChange: jest.fn(),
    onKeyPress: jest.fn(),
    label: 'TextField',
    icon: 'search',
  };
  const wrapper = shallow(<TextField {...props} />);

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('text search submit', () => {
    wrapper.find('input').simulate('keypress', { key: 'Enter' });
    expect(props.onKeyPress).toHaveBeenCalled();
  });
});
