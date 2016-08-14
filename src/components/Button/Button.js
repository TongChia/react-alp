import React, { PropTypes as types } from 'react';
import createFragment from 'react-addons-create-fragment';
import cx from 'classnames';

export default function Button({ children, className, style, href, label, linkTo, icon, outline, clear, round, block, full, direction, ...others}) {
  const props = {
    href,
    className: cx('alp-button', {outline, clear, round, block, full}, `icon-${direction}`, className),
    style: Object.assign({}, style),
    ...others
  };
  icon = icon?React.cloneElement(icon, {className: cx(icon.props.className, 'icon')}):null;
  const childrens = createFragment({icon, label, children});

  if (linkTo) {
    const Link = require('react-router/lib/Link.js');
    return <Link to={linkTo} children={childrens} {...props} />;
  }

  return React.createElement(href ? 'a' : 'button', props, childrens);
}

Button.propTypes = {
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
  linkTo: types.string
};
