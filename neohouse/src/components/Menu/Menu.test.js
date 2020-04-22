import { shallow } from 'enzyme';
import React from 'react';
import Menu from './Menu';

describe('Menu', () => {
  let wrapper;
  const map = {};
  const props = {
    active: true,
    onChange: jest.fn(),
  };

  document.addEventListener = jest.fn((event, cb) => {
    map[event] = cb;
  });

  beforeEach(() => {
    wrapper = shallow(<Menu {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('show menu', () => {
    expect(wrapper.find('.dropdown-content').hasClass('active')).toBeTruthy();
  });
});
