import React from 'react';
import Button from 'components/Button';
import { Link } from 'react-router';
import Icon, { Menu, ArrowBack } from 'components/Icon';

export default function Home(props) {
  return (
    <div className="alp-paper">
      <h1>Home</h1>
      <Button
        activeClassName={'alp-button-active'}
        label={'Button'} clone={<Link to="/" />}
      ><span>sub label</span></Button>
      <Icon size={24}>
        <i>a</i>
      </Icon>
      <Menu />
      <ArrowBack forward />
      <Button icon={<Menu />} />
      <Link to="sub" >加载子页面</Link>
      <Link to="/" >不加载子页面</Link>
    </div>
  );
}

Home.propTypes = {
  subPage: React.propTypes.element
};
