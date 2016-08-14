import React, { PropTypes as types } from 'react';
import cx from 'classnames';

export default function ToolbarTitle({ title, className, style, children, ...others }) {
  title = React.isValidElement(title) ?
    React.cloneElement(title, { className: cx('alp-title', title.props.className) }) :
    React.createElement('h2', { className: 'alp-title' }, title);

  return (
    <div
      className={cx('alp-title-inner', className)}
      style={Object.assign({}, style)}
      {...others}
    >
      {children}
      {title}
    </div>
  );
}

ToolbarTitle.propTypes = {
  className: types.string,
  children: types.node,
  style: types.object,
  title: types.node
};
