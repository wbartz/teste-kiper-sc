import { shallow } from 'enzyme';
import React from 'react';
import SelectField from '.';

describe('SelectField', () => {
  const props = {
    value: '',
    name: 'SelectField',
    onChange: jest.fn(),
    onKeyPress: jest.fn(),
    label: 'SelectField',
    options: [{ value: 'teste', label: 'teste' }],
  };
  const wrapper = shallow(<SelectField {...props} />);

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
