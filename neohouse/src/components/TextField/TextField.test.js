import { shallow } from 'enzyme';
import React from 'react';
import TextField from '.';

describe('TextField', () => {
  const props = {
    onChange: jest.fn(),
    onKeyPress: jest.fn(),
    icon: 'search',
    name: 'busca',
    value: '',
    label: 'busca',
    type: 'text',
    required: false,
    size: 'auto',
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
