import React, { Component, PropTypes as types } from 'react';
import classNames from 'classnames';
import { os } from '../../utility/ua-test';

export default class Layout extends Component {

  static propTypes = {
    className: types.string,
    children: types.node,
    style: types.object,
    forcePlatform: types.oneOf(['iOS', 'Android'])
  };

  static childContextTypes = {
    platform: types.string
  };

  constructor(props) {
    super(props);
    this.platform = this.props.forcePlatform || os();
  }

  getChildContext() {
    return {
      platform: this.platform
    };
  }

  render() {
    const { className, style, children, ...others } = this.props;
    return (
      <div
        className={classNames('alp-layout', this.platform.toLowerCase(), className)}
        style={Object.assign({}, style)}
        {...others}
      >
        {children}
      </div>
    );
  }
}
