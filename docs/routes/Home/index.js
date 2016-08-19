import React from 'react';
import Button from 'components/Button';
import { Link } from 'react-router';
import Icon from 'components/Icon';

export default function Home() {
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
    </div>
  );
}
