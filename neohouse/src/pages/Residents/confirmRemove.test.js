import { shallow } from 'enzyme';
import React from 'react';
import ConfirmRemove from './confirmRemove';

describe('ConfirmRemove', () => {
  let wrapper;
  const props = {
    history: {
      go: jest.fn(),
    },
    onClose: jest.fn(),
    user: {},
    show: false,
  };

  beforeEach(() => {
    wrapper = shallow(<ConfirmRemove {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
