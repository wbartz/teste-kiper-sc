import { shallow } from "enzyme";
import React from "react";
import RouterBackground from ".";

describe("RouterBackground", () => {
  let wrapper;
  const props = {
    children: () => <>Hellow World!</>,
  };

  beforeEach(() => {
    wrapper = shallow(<RouterBackground {...props} />);
  });

  it("render without crashing", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
