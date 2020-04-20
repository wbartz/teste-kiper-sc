import { shallow } from 'enzyme';
import React from 'react';
import StoreProvider from '.';

describe('StoreProvider', () => {
  it('render without crashing', () => {
    expect(shallow(<StoreProvider />)).toMatchSnapshot();
  });
});
