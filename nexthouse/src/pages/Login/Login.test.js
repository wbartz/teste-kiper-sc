import { shallow } from 'enzyme';
import React from 'react';
import Login from '.';

describe('Login', () => {
  it('render without crashing', () => {
    expect(shallow(<Login />)).toMatchSnapshot();
  });
});
