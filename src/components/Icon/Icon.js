import React, { PropTypes } from 'react';
import cx from 'classnames';

const Icon = ({ className, style, children, size, src, alt, color, ...others }) => {
  const classNames = ['alp-icon', className];
  const childrenProps = {};

  /* eslint no-param-reassign: 0 */
  style = style || {};

  if (size) {
    if (typeof size === 'number') {
      childrenProps.width = src ? '' : size;
      childrenProps.height = size;
      style.fontSize = size;
    } else {
      childrenProps.width = size.width;
      childrenProps.height = size.height;
    }
  }

  // window.console.log(children);
  if (src) {
    classNames.push('alp-icon-img');
    children = <img alt={alt || 'imange'} src={src} {...childrenProps} />;
  } else if (children && children.type === 'svg') {
    classNames.push('alp-icon-svg');
    if (color) { childrenProps.fill = color; }
    children = React.cloneElement(children, childrenProps);
  } else {
    classNames.push('alp-icon-font');
    const $style = typeof size === 'number' ?
      { fontSize: size } : size;
    style = Object.assign({}, $style, style);
  }

  return (
    <span
      {...others}
      className={cx(...classNames)}
      style={style}
    >
      {children}
    </span>
  );
};

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number
    })
  ]),
  style: PropTypes.object,
  src: PropTypes.string,
  color: PropTypes.string,
  alt: PropTypes.string
};

Icon.defaultProps = {
};

export default Icon;

// TODO: 优化判断 font, SVG 和 image 的代码
