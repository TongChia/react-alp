import React, { PropTypes, Component } from 'react';
import createFragment from 'react-addons-create-fragment';
import cx from 'classnames';

export default class Button extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    label: PropTypes.element,
    direction: PropTypes.oneOf(['top', 'left', 'right', 'bottom']),
    icon: PropTypes.element,
    outline: PropTypes.bool,
    clear: PropTypes.bool,
    round: PropTypes.bool,
    block: PropTypes.bool,
    full: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
    activeClassName: PropTypes.string,
    active: PropTypes.bool,
    clone: PropTypes.any,
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
