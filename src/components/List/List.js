import React, {PropTypes as types} from 'react';
import cx from 'classnames';
import Item from '../ListItem';

export default function List ({className, style, children, items, noLine, ...others}) {
  return (
    <ul
      className={cx('alp-list', {'no-line': noLine}, className)}
      style={Object.assign({}, style)}
      {...others}>
      {children}
      {items?items.map((o, i)=>(<Item key={i} {...o}/>)):''}
    </ul>
  );
}

List.propTypes = {
  noLine: types.bool
};
