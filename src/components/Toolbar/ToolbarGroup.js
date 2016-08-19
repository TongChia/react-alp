import React, { PropTypes as types } from 'react';
import cx from 'classnames';

export default function ToolbarGroup({ className, stand, children, ...others }) {
  return (
    <div
      className={cx('alp-toolbar-group', `alp-toolbar-${stand}`, className)}
      {...others}
    >
      {children}
    </div>
  );
}

ToolbarGroup.propTypes = {
  className: types.string,
  children: types.node,
  stand: types.oneOf(['left', 'right'])
};

ToolbarGroup.defaultProps = {
  stand: 'left'
};
