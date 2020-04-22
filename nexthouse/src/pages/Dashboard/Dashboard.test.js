import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '.';

describe('Dashboard', () => {
  const props = {
    getDashboard: jest.fn()
  }

  it('render without crashing', () => {
    expect(shallow(<Dashboard {...props} />)).toMatchSnapshot();
  });
});
