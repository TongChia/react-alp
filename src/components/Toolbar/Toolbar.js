import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

export default class ToolBar extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    fixed: PropTypes.bool
  };

  static childContextTypes = {
    underToolbar: PropTypes.bool
  };

  getChildContext() {
    return {
      underToolbar: true
    };
  }

  render() {
    const { className, children, ...others } = this.props;
    return (
      <header
        {...others}
        className={cx('alp-toolbar', className)}
      >
        {children}
      </header>
    );
  }
}
