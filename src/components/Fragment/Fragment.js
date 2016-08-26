import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';
import Paper from '../Paper';

export default class Fragment extends Component {

  static propTypes = {
    className: PropTypes.array,
    children: PropTypes.node,
    full: PropTypes.bool,
    zDepth: PropTypes.number,
    action: PropTypes.oneOf(['fade', 'slide']),
    hasHeader: PropTypes.bool,
    timeout: PropTypes.shape({
      enter: PropTypes.number,
      leave: PropTypes.number
    })
  };

  static defaultProps = {
    zDepth: 0,
    action: 'fade',
    timeout: {
      enter: 368,
      leave: 256
    }
  };

  static childContextTypes = {
    underFragment: PropTypes.bool
  };

  getChildContext() {
    return {
      underFragment: true
    };
  }

  componentWillReceiveProps() {
    this._key = new Date().getTime();
  }

  render() {
    const { className, children, zDepth, full, hasHeader, action, timeout, ...others } = this.props;
    if (children) window.console.log(children.key);
    return (
      <ReactCSSTransitionGroup
        {...others}
        className="alp-fragment"
        transitionName={`alp-fragment-${action}`}
        transitionEnterTimeout={timeout.enter}
        transitionLeaveTimeout={timeout.leave}
      >
        {children ?
          <Paper
            className={cx('alp-fragment-content', { full, 'has-header': hasHeader }, className)}
            zDepth={zDepth}
          >{children}</Paper> :
          null}
      </ReactCSSTransitionGroup>
    );
  }
}

// TODO: 子页面切换时动画 (Key值变更时执行动画)
