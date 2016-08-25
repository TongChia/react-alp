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
    style: PropTypes.object,
    forcePlatform: PropTypes.oneOf(['iOS', 'Android', 'winPhone', 'Web'])
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
      hasHeader: false,
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
    const { className, style, children, ...others } = this.props;
    return (
      <div
        className={classNames('alp-layout',
          { 'has-header': this.state.hasHeader, 'has-tabs': this.state.hasTabs },
          this.platform.toLowerCase(), className)}
        style={Object.assign({}, style)}
        {...others}
      >
        {children}
      </div>
    );
  }
}
