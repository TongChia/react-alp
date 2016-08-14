import React, { PropTypes, Component } from 'react';
import cx from 'classnames';

export default class Avatar extends Component {
  static propTypes = {
    round: PropTypes.bool,
    img: PropTypes.element,
    src: PropTypes.string,
    broken: PropTypes.func
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
