import React, { PropTypes } from 'react';
import cx from 'classnames';


const createLabelElement = (label) => {
  if (typeof label === 'string') return <h2 className="label">{label}</h2>;
  if (React.isValidElement(label)) return React.cloneElement(label, { className: cx(label.props.className, 'label') });
  return null;
};

export default function Item({ className, avatar,
  icon, label, linkTo, onClick, children, ...others }, { router }) {
  const handleClick = (linkTo && router) ? () => {
    router.push(linkTo);
  } : onClick;

  return (
    <li
      {...others}
      className={cx('alp-item', { 'alp-item-icon': icon, 'alp-item-avatar': avatar }, className)}
      onClick={handleClick}
    >
      {icon || avatar}
      <div className="alp-item-inner">
        {createLabelElement(label)}
        {children}
      </div>
    </li>
  );
}

Item.defaultProps = {
};

Item.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  icon: PropTypes.element,
  avatar: PropTypes.element,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  linkTo: PropTypes.string
};

Item.contextTypes = {
  router: PropTypes.object
};

// TODO: return <Link />, <a />
