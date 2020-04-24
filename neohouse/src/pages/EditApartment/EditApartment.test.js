import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../../components/Modal';
import EditApartment from '.';

describe('EditApartment', () => {
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
    wrapper = shallow(<EditApartment {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('render Modal', () => {
    expect(wrapper.find(Modal).exists()).toBeTruthy();
  });
});
