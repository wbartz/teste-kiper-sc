import { shallow } from 'enzyme';
import React from 'react';
import AuthProvider from '.';

describe('AuthProvider', () => {
  let wrapper;
  const props = {
    children: () => <>Hellow World!</>,
  };

  beforeEach(() => {
    wrapper = shallow(<AuthProvider {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
