import React, { PropTypes } from 'react';
import cx from 'classnames';

export default function ToolbarGroup({ className, stand, children, ...others }) {
  return (
    <div
      {...others}
      className={cx('alp-toolbar-group', `alp-toolbar-${stand}`, className)}
    >
      {children}
    </div>
  );
}

ToolbarGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  stand: PropTypes.oneOf(['left', 'right'])
};

ToolbarGroup.defaultProps = {
  stand: 'left'
};
