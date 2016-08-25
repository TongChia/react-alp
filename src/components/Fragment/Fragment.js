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

  render() {
    const { className, children, zDepth, full, action, timeout, ...others } = this.props;

    return (
      <ReactCSSTransitionGroup
        className="alp-fragment"
        transitionName={`alp-fragment-${action}`}
        transitionEnterTimeout={timeout.enter}
        transitionLeaveTimeout={timeout.leave}
        {...others}
      >
        {children ?
          <Paper className={cx('alp-fragment-content', { full }, className)} zDepth={zDepth}>{children}</Paper> :
          null}
      </ReactCSSTransitionGroup>
    );
  }
}
