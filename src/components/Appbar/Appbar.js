import React, { PropTypes as types } from 'react';
import cx from 'classnames';
import ToolBar, { ToolbarTittle, ToolbarGroup } from '../Toolbar';
import Button from '../Button';

const styles = {
  root: {
  },
  title: {
  }
};

export default function Appbar({ back, menu, lefts, rights, title, fixed,
  className, style, ...others }) {
  if (fixed) styles.root.position = 'fixed';
  // if (context.platform) {
  //   //console.log('Appbar: ', context.platform)
  // }

  /* eslint no-param-reassign: 0 */
  if (back === true) back = <Button clear label="Back" />;
  if (typeof back === 'string') back = <Button clear label={back} />;

  if (menu === true) menu = <Button clear label="menu" />;
  if (typeof menu === 'string') menu = <Button clear label={menu} />;

  return (
    <ToolBar
      className={cx('alp-appbar', className)}
      style={Object.assign({}, style, styles.root)}
      {...others}
    >
      <ToolbarTittle
        title={title}
        style={styles.title}
      />
      <ToolbarGroup>
        {back}
        {menu}
        {lefts}
      </ToolbarGroup>
      <ToolbarGroup stand="right">
        {rights}
      </ToolbarGroup>
    </ToolBar>
  );
}

Appbar.propTypes = {
  title: types.element,
  fixed: types.bool
};

Appbar.defaultProps = {
  fixed: true
};

// Appbar.contextTypes = {
//   platform: types.string
// };

// TODO: back \ menu icon
// TODO: Android platform
