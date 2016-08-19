import React, { PropTypes as types, Component } from 'react';
import cx from 'classnames';

export default class ToolBar extends Component {

  static propTypes = {
    className: types.string,
    children: types.node,
    style: types.object,
    fixed: types.bool
  };

  static childContextTypes = {
    underToolbar: types.bool
  };

  // constructor(props, context) {
  //   super(props, context);
  // }

  getChildContext() {
    return {
      underToolbar: true
    };
  }

  render() {
    const { className, children, style, fixed, ...others } = this.props;
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
}
