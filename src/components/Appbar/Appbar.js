import React, { PropTypes as types, Component } from 'react';
import cx from 'classnames';
import Toolbar from '../Toolbar/Toolbar';
import ToolbarTittle from '../Toolbar/ToolbarTittle';
import ToolbarGroup from '../Toolbar/ToolbarGroup';
import Button, { ButtonGroup } from '../Button';
import { ArrowBack, Menu } from '../Icon';

const styles = {
  root: {
  },
  title: {
  }
};

export default class Appbar extends Component {

  static propTypes = {
    className: types.string,
    children: types.node,
    style: types.object,
    title: types.element,
    fixed: types.bool,
    back: types.oneOfType([
      types.bool,
      types.element
    ]),
    menu: types.oneOfType([
      types.bool,
      types.element
    ]),
    lefts: types.element,
    rights: types.element
  };

  static defaultProps = {
    fixed: true
  };

  static contextTypes = {
    platform: types.string,
    onAppbarMount: types.func
  };

  // constructor(props, context) {
  //   super(props, context);
  // }

  componentWillMount() {
    if (this.context.onAppbarMount) {
      this.context.onAppbarMount(true);
    }
  }

  componentWillUnmount() {
    if (this.context.onAppbarMount) {
      this.context.onAppbarMount(false);
    }
  }

  render() {
    const { back, menu, lefts, rights, title, fixed,
      className, style, ...others } = this.props;
    if (fixed) styles.root.position = 'fixed';

    /* eslint no-param-reassign: 0 */
    const backButton = back === true ? <Button icon={<ArrowBack />} /> : back;
    // if (typeof back === 'string') back = <Button clear label={back} />;

    const menuButton = menu === true ? <Button icon={<Menu />} /> : menu;
    // if (typeof menu === 'string') menu = <Button clear label={menu} />;

    return (
      <Toolbar
        className={cx('alp-appbar', className)}
        style={Object.assign({}, style, styles.root)}
        {...others}
      >
        <ToolbarGroup stand="right">
          {rights}
        </ToolbarGroup>
        <ToolbarTittle title={title} />
        <ToolbarGroup>
          <ButtonGroup clear>
            {backButton}
            {menuButton}
          </ButtonGroup>
        </ToolbarGroup>
        <ToolbarGroup>
          {lefts}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

// TODO: back \ menu icon
// TODO: Android platform
