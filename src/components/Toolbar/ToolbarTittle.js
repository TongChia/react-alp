import React, { PropTypes } from 'react';
import cx from 'classnames';

export default function ToolbarTitle({ title, className, style, children, ...others }) {
  /* eslint no-param-reassign: 0 */
  title = React.isValidElement(title) ?
    React.cloneElement(title, { className: cx('alp-title', title.props.className) }) :
    React.createElement('h2', { className: 'alp-title' }, title);

  return (
    <div
      className={cx('alp-title-content', className)}
      style={Object.assign({}, style)}
      {...others}
    >
      {children}
      {title}
    </div>
  );
}

ToolbarTitle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  title: PropTypes.node
};
