import React, { PropTypes as types, Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import cx from 'classnames';

export default class Button extends Component {

  static propTypes = {
    className: types.string,
    children: types.node,
    style: types.object,
    label: types.element,
    direction: types.oneOf(['top', 'left', 'right', 'bottom']),
    icon: types.element,
    outline: types.bool,
    clear: types.bool,
    round: types.bool,
    block: types.bool,
    full: types.bool,
    href: types.string,
    onClick: types.func,
    activeClassName: types.string,
    active: types.bool,
    clone: types.any,
  };

  render() {
    const { children, className, style, href, label, clone, icon, active,
      outline, clear, round, block, full, direction, ...others } = this.props;

    const classNames = [
      'alp-button',
      { 'alp-icon-button': icon },
      { 'alp-button-active': active },
      { outline, clear, round, block, full },
      icon && direction ? `icon-${direction}` : '',
      className
    ];
    const props = {
      href,
      className: cx(...classNames),
      onClick: this.handleClick,
      style: Object.assign({}, style),
      ...others
    };
    const childrens = createFragment({ icon, label, children });

    if (clone) {
      return React.cloneElement(clone, props, childrens);
    }
    return React.createElement(href ? 'a' : 'button', props, childrens);
  }
}
