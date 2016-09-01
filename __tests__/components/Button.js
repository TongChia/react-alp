import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../src/components/Button/Button';

describe('<Button />', () => {
  it('should has class "alp-*"', () => {
    const wrapper = shallow(<Button label="Hello" />);
    expect(wrapper.is('.alp-button')).toBe(true);
  });

  it('should has class "outline"', () => {
    const wrapper = shallow(<Button label="Hello" outline />);
    expect(wrapper.is('.outline')).toBe(true);
  });
});
