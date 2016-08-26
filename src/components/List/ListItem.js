import React, { createFragment, cloneElement, isValidElement, PropTypes } from 'react';
import cx from 'classnames';

export default function ListItem({ className, style, avatar,
  icon, label, linkTo, onClick, children, ...others }, { router }) {

  const classNames = ['alp-list-item'];

  if (icon) {
    classNames.push('alp-list-item-icon');
    icon = cloneElement(icon, { className: cx(icon.props.className, 'icon') });
  } else if (avatar) {
    classNames.push('alp-list-item-avatar');
  }

  if (typeof label == 'string') {
    label = <h2 className="label">{label}</h2>;
  } else if (isValidElement(label)) {
    label = cloneElement(label, { className: cx(label.props.className, 'label') });
  }

  const handleClick = (linkTo&&router) ? () => {
    router.push(linkTo);
  }:onClick;

  return (
    <li
      {...others}
      className={cx(classNames, className)}
      style={Object.assign({}, style)}
      onClick={handleClick}
    >
      {icon || avatar}
      <div className="item-inner">
        {label}
        {children}
      </div>
    </li>
  );
}

ListItem.defaultProps = {
};

ListItem.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  icon: PropTypes.element,
  avatar: PropTypes.element
};

ListItem.contextTypes = {
  router: PropTypes.object
};

// TODO: return <Link />, <a />
