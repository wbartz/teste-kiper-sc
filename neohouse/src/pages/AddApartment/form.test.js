import { shallow } from 'enzyme';
import React from 'react';
import Form from './form';

describe('Form', () => {
  let wrapper;
  const props = {
    errors: {},
    control: {},
  };

  beforeEach(() => {
    wrapper = shallow(<Form {...props} />);
  });

  it('render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
