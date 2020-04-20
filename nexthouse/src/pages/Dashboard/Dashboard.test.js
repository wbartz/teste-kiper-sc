import { shallow } from 'enzyme';
import React from 'react';
import Dashboard from '.';

describe('Dashboard', () => {
  it('render without crashing', () => {
    expect(shallow(<Dashboard />)).toMatchSnapshot();
  });
});
