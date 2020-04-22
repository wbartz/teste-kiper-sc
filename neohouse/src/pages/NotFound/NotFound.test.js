import { shallow } from 'enzyme';
import React from 'react';
import NotFound from '.';

describe('NotFound', () => {
  it('render without crashing', () => {
    expect(shallow(<NotFound />)).toMatchSnapshot();
  });
});
