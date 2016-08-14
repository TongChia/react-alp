import React, {PropTypes as types} from 'react';
import cx from 'classnames';

export default function ToolbarGroup({ className, stand, children, ...others }) {
  return (
    <div
      className={cx('alp-group', `alp-${stand}`, className)}
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
