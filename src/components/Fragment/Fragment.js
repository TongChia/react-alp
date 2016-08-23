import React, { Component, PropTypes as types } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cx from 'classnames';
import Paper from '../Paper';

export default class Fragment extends Component {

  static propTypes = {
    className: types.array,
    children: types.node,
    full: types.bool,
    zDepth: types.number,
    action: types.oneOf(['fade', 'slide']),
    timeout: types.shape({
      enter: types.number,
      leave: types.number
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

  constructor(props, context) {
    super(props, context);
    window.console.log(props);
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
