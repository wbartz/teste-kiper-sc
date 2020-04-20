import { shallow } from 'enzyme';
import React from 'react';
import App from '.';

describe('App', () => {
  it('render without crashing', () => {
    expect(shallow(<App />)).toMatchSnapshot();
  });
});
