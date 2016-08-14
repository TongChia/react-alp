import React, { PropTypes as types, isValidElement } from 'react';
import cx from 'classnames';
import ToolBar, { ToolbarTittle, ToolbarGroup } from '../Toolbar';
import Button from '../Button';

const styles = {
  root: {
  },
  title: {
  }
};

export default function Appbar({ backButton, menuButton, leftButtons, rightButtons,
  title, fixed, className, style, ...others }) {
  if (fixed) styles.root.position = 'fixed';
  // if (context.platform) {
  //   //console.log('Appbar: ', context.platform)
  // }

  /* eslint no-param-reassign: 0 */
  if (backButton === true) backButton = <Button clear label="Back" />;
  if (typeof backButton === 'string') backButton = <Button clear label={backButton} />;

  if (menuButton === true) menuButton = <Button clear label="menu" />;
  if (typeof menuButton === 'string') menuButton = <Button clear label={menuButton} />;

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
        {backButton}
        {menuButton}
        {leftButtons}
      </ToolbarGroup>
      <ToolbarGroup stand="right">
        {rightButtons}
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
