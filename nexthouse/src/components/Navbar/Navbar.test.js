import { shallow } from 'enzyme';
import React from 'react';
import { NavbarComponent } from '.';

describe('NavbarComponent', () => {
  const props = {
    auth: '',
    history: {
      push: jest.fn(),
    },
  };

  it('render without crashing', () => {
    expect(shallow(<NavbarComponent {...props} />)).toMatchSnapshot();
  });
});
