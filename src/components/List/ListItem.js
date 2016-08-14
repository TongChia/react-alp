import React, {createFragment, cloneElement, isValidElement, PropTypes as types} from 'react';
import cx from 'classnames';

export default function ListItem ({className, style, avatar, icon, label, linkTo, href, onClick, children, ...others}, {router}) {

  const classNames = ['item'];

  if (icon) {
    classNames.push('item-icon');
    icon = cloneElement(icon, {className: cx(icon.props.className, 'icon')});
    if (avatar) avatar = undefined
  } else if (avatar) {
    classNames.push('item-avatar');
  }

  if (typeof label == 'string') {
    label = (<h2 className="label">{label}</h2> )
  } else if (isValidElement(label)) {
    label = cloneElement(label, {className: cx(label.props.className, 'label')})
  }

  const handleClick = (linkTo&&router) ? () => {
    router.push(linkTo);
  }:onClick;

  return (
    <li className={cx(classNames, className)}
        style={Object.assign({}, style)}
        onClick={handleClick}
        {...others}>
      {icon||avatar}
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
  label: types.oneOfType([
    types.string,
    types.element
  ]),
  icon: types.element,
  avatar: types.element
};

ListItem.contextTypes = {
  router: types.object
};

//TODO: return <Link />, <a />
