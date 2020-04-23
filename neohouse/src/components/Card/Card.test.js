import { shallow } from 'enzyme';
import React from 'react';
import Card from '.';

describe('Card', () => {
  const props = {
    onEdit: jest.fn(),
    id: 'teste',
    title: 'teste',
    icon: 'edit',
  };

  it('render without crashing', () => {
    expect(shallow(<Card {...props} />)).toMatchSnapshot();
  });
});
