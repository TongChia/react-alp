import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Client from '../../utility/client-detect';
import EventEmitter from 'events';

class LayoutEvents extends EventEmitter {
  onHeaderChange(event, val) {
    if (typeof val === 'function') {
      this.addListener(event, val);
    } else {
      this.emit(event, val);
    }
  }
}

export const layoutEvents = new LayoutEvents();

const client = new Client();

export default class Layout extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    forcePlatform: PropTypes.oneOf(['iOS', 'Android', 'winPhone', 'Web']),
    hasHeader: PropTypes.bool,
  };

  static childContextTypes = {
    platform: PropTypes.string,
    onAppbarMount: PropTypes.func,
    onTabsMount: PropTypes.func,
    events: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.platform = this.props.forcePlatform || client.platform;
    this.state = {
      hasHeader: this.props.hasHeader || false,
      hasTabs: false
    };
  }

  getChildContext() {
    return {
      platform: this.platform,
      onAppbarMount: this.onAppbarMount.bind(this),
      onTabsMount: this.onTabsMount.bind(this),
      events: layoutEvents
    };
  }

  onAppbarMount(mount) {
    this.setState({ hasHeader: mount });
  }

  onTabsMount(mount) {
    this.setState({ hasTabs: mount });
  }

  render() {
    const { className, children, ...others } = this.props;
    return (
      <div
        {...others}
        className={classNames('alp-layout',
          { 'has-header': this.state.hasHeader, 'has-tabs': this.state.hasTabs },
          this.platform.toLowerCase(), className)}
      >
        {children}
      </div>
    );
  }
}

// TODO: onScroll 事件 用于自动加载
