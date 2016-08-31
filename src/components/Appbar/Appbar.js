import React, { PropTypes, Component } from 'react';
import cx from 'classnames';
import Toolbar from '../Toolbar/Toolbar';
import ToolbarTittle from '../Toolbar/ToolbarTittle';
import ToolbarGroup from '../Toolbar/ToolbarGroup';
import Button, { ButtonGroup } from '../Button';
import { ArrowBack, Menu } from '../Icon';

export default class Appbar extends Component {

  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.object,
    title: PropTypes.element,
    fixed: PropTypes.bool,
    back: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element
    ]),
    menu: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.element
    ]),
    onClickBack: PropTypes.func,
    onClickMenu: PropTypes.func,
    lefts: PropTypes.element,
    rights: PropTypes.element
  };

  static defaultProps = {
    style: {}
  };

  static contextTypes = {
    platform: PropTypes.string,
    onAppbarMount: PropTypes.func,
    underFragment: PropTypes.bool,
    router: PropTypes.object,
    menu: PropTypes.object,
  };

  componentWillMount() {
    if (this.context.onAppbarMount && !this.context.underFragment) {
      this.context.onAppbarMount(true);
    }
  }

  componentWillUnmount() {
    if (this.context.onAppbarMount && !this.context.underFragment) {
      this.context.onAppbarMount(false);
    }
  }

  onClickBack = this.props.onClickBack ? this.props.onClickBack : () => {
    if (this.context.router) this.context.router.goBack();
  };

  onClickMenu = this.props.onClickMenu ? this.props.onClickMenu : () => {
    if (this.context.menu) this.context.menu.open();
  };

  render() {
    const { back, menu, lefts, rights, title, fixed, style, className, ...others } = this.props;
    if (fixed) style.position = 'fixed';

    const backButton = back === true ? <Button icon={<ArrowBack />} onClick={this.onClickBack} /> : back;
    const menuButton = menu === true ? <Button icon={<Menu />} onClick={this.onClickMenu} /> : menu;

    return (
      <Toolbar
        {...others}
        className={cx('alp-appbar', className)}
      >
        <ToolbarGroup stand="right">
          {rights}
        </ToolbarGroup>
        <ToolbarGroup>
          <ButtonGroup clear>
            {menuButton}
            {backButton}
          </ButtonGroup>
        </ToolbarGroup>
        <ToolbarTittle title={title} />
        <ToolbarGroup>
          {lefts}
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

// TODO: auto iOS & Android's icon [back, menu]
// TODO: lalala
