import { shallow } from 'enzyme';
import React from 'react';
import Breadcrumb from '.';

describe('Breadcrumb', () => {
  const props = {
    onRedirect: jest.fn(),
    pages: [
      {
        label: 'teste',
        link: '/test',
      },
    ],
    active: 'teste 2',
  };

  it('render without crashing', () => {
    expect(shallow(<Breadcrumb {...props} />)).toMatchSnapshot();
  });
});
