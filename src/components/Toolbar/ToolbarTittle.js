import React, { PropTypes as types } from 'react';
import cx from 'classnames';

export default function ToolbarTitle({ title, className, style, children, ...others }) {
  /* eslint no-param-reassign: 0 */
  title = React.isValidElement(title) ?
    React.cloneElement(title, { className: cx('alp-title-inner', title.props.className) }) :
    React.createElement('h2', { className: 'alp-title-inner' }, title);

  return (
    <div
      className={cx('alp-title', className)}
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
