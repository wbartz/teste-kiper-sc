import { shallow } from 'enzyme';
import React from 'react';
import Table from '.';

describe('Table', () => {
  const props = {
    header: ['id', 'name'],
    lines: [
      {
        id: 1,
        name: 'teste',
      },
    ],
    onEdit: jest.fn(),
    onView: jest.fn(),
    onRemove: jest.fn(),
  };

  it('render without crashing', () => {
    expect(shallow(<Table {...props} />)).toMatchSnapshot();
  });
});
