import { shallow } from 'enzyme';
import React from 'react';
import ConfirmRemove from './confirmRemove';

describe('ConfirmRemove', () => {
  let wrapper;
  const props = {
    onClose: jest.fn(),
    onConfirm: jest.fn(),
    show: false,
  };

  beforeEach(() => {
    wrapper = shallow(<ConfirmRemove {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
