import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../../components/Modal';
import AddApartment from '.';

describe('AddApartment', () => {
  let wrapper;
  const props = {
    history: {
      go: jest.fn(),
    },
    onClose: jest.fn(),
    user: {},
    show: false,
    addApartment: jest.fn()
  };

  beforeEach(() => {
    wrapper = shallow(<AddApartment {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render Modal', () => {
    expect(wrapper.find(Modal).exists()).toBeTruthy();
  });
});
