import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../../components/Modal';
import AddResident from '.';

describe('AddResident', () => {
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
    wrapper = shallow(<AddResident {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render Modal', () => {
    expect(wrapper.find(Modal).exists()).toBeTruthy();
  });
});
