import React, {PropTypes as types} from 'react';
import cx from 'classnames';

export default function ToolBar({ className, children, style, fixed, ...others }) {
  const $style = {
  //  position: (fixed?'fixed':undefined)
  };
  if (fixed) $style.position = 'fixed';
  return (
    <header
      className={cx('alp-toolbar', className)}
      style={Object.assign({}, style, $style)}
      {...others}
    >
      {children}
    </header>
  );
}

ToolBar.propTypes = {
  className: types.string,
  children: types.node,
  style: types.object,
  fixed: types.bool
};
