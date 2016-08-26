import React, { PropTypes } from 'react';
import cx from 'classnames';
import Item from './ListItem';

export default function List({ className, style, children, items, noLine, ...others }) {
  return (
    <ul
      {...others}
      className={cx('alp-list', { 'no-line': noLine }, className)}
      style={Object.assign({}, style)}
    >
      {children}
      {items ? items.map((o, i) => <Item key={o.id || i} {...o} />) : null}
    </ul>
  );
}

List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object,
  items: PropTypes.array,
  noLine: PropTypes.bool
};
