import React, { PropTypes } from 'react';
import cx from 'classnames';

const ButtonGroup = ({ className, style, clear, outline, children }, { underToolbar }) => (
  <div
    className={cx('alp-button-group', { clear: clear || underToolbar, outline }, className)}
    style={Object.assign({}, style)}
  >
    {children}
  </div>
);

ButtonGroup.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node,
  clear: PropTypes.bool,
  outline: PropTypes.bool
};

ButtonGroup.contextTypes = {
  underToolbar: PropTypes.bool
};

export default ButtonGroup;
