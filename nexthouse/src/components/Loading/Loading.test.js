import { shallow } from 'enzyme';
import React from 'react';
import Loading from '.';

describe('Loading', () => {
  let wrapper;
  const props = {
    isLoading: false,
  };

  beforeEach(() => {
    wrapper = shallow(<Loading {...props} />); // eslint-disable-line
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
