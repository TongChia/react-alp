import React, { PropTypes as types, Component } from 'react';
import cx from 'classnames';

export default class Avatar extends Component {
  static propTypes = {
    round: types.bool,
    img: types.element,
    src: types.string,
    broken: types.func,
    className: types.string,
    children: types.node,
    style: types.object,
  };

  static defaultProps = {
    round: true
  };

  constructor(props) {
    super(props);
    this.handleBroken.bind(this);
  }

  handleBroken() {
    if (this.props.broken) this.props.broken();
  }

  render() {
    /* eslint no-unused-vars: 0 */
    const { className, style, children, round, src, img, broken, size, ...others } = this.props;
    const $style = size ? {
      width: size,
      height: size
    } : {};
    return (
      <div
        className={cx('alp-avatar', { 'no-round': !round }, className)}
        style={Object.assign({}, style, $style)}
        {...others}
      >
        {children}
        <img src={src} alt="avatar" onError={this.handleBroken} />
      </div>
    );
  }
}
