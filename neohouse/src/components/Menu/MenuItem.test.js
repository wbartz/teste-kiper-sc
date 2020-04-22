import { shallow } from 'enzyme';
import React from 'react';
import MenuItem from './MenuItem';

describe('MenuItem', () => {
  let wrapper;
  const props = {
    active: true,
    anchor: true,
    onClick: jest.fn(),
    children: '',
  };

  beforeEach(() => {
    wrapper = shallow(<MenuItem {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
