import React, { PropTypes as types } from 'react';
import cx from 'classnames';

const ButtonGroup = ({ className, style, clear, outline, children }, { underToolbar }) => (
  <div
    className={cx('alp-button-group', { clear: clear || underToolbar, outline }, className)}
    style={Object.assign({}, style)}
  >
    {children}
  </div>
);

ButtonGroup.displayName = 'ButtonGroup';

ButtonGroup.propTypes = {
  className: types.string,
  style: types.object,
  children: types.node,
  clear: types.bool,
  outline: types.bool
};

ButtonGroup.contextTypes = {
  underToolbar: types.bool
};

export default ButtonGroup;
