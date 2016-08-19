import React from 'react';
import { shallow } from 'enzyme';
import Button from 'components/Button';

describe('<Button />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Button />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "index"', () => {
      expect(component.hasClass('alp-button')).to.equal(true);
    });
  });
});
