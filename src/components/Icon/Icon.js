import React, { PropTypes as types } from 'react';
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

  if (src) {
    classNames.push('alp-icon-img');
    children = <img alt={alt || 'imange'} {...childrenProps} />;
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
      className={cx(...classNames)}
      style={style}
      {...others}
    >
      {children}
    </span>
  );
};

Icon.propTypes = {
  className: types.string,
  children: types.node,
  size: types.oneOfType([
    types.number,
    types.shape({
      width: types.number,
      height: types.number
    })
  ]),
  style: types.object,
  src: types.string,
  color: types.string,
  alt: types.string
};

Icon.defaultProps = {
};

export default Icon;

// TODO: 优化判断 font, SVG 和 image 的代码
