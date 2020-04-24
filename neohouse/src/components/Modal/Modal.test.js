import { shallow } from 'enzyme';
import React from 'react';
import Modal from '.';

describe('Modal', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Modal />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
