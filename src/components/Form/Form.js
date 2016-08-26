import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

export default class Form extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    window.console.log(this.props);
  }

  render() {
    const { children } = this.props;
    return (
      <form className={cx('alp-form')}>
        {children}
      </form>
    );
  }
}
