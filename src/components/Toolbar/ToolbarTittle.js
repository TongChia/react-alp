import React, { PropTypes } from 'react';
import cx from 'classnames';

export default function ToolbarTitle({ title, className, children, ...others }) {
  /* eslint no-param-reassign: 0 */
  title = typeof title === 'string' ?
    React.createElement('h2', { className: 'alp-title' }, title) :
    React.cloneElement(title, { className: cx('alp-title', title.props.className) });

  return (
    <div
      {...others}
      className={cx('alp-title-content', className)}
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
