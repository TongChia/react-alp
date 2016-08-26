import React from 'react';
import Appbar from 'components/Appbar';
import Button from 'components/Button';
import Paper from 'components/Paper';
import { Link } from 'react-router';

export function Page1() {
  const rights = <div><Button clear label="查找" /></div>;
  return (
    <Paper>
      <Appbar title="子页面" rights={rights} back />
      <h2>I'm Page1</h2>
      <Link to="sub2">页面2</Link>
    </Paper>
  );
}

export function Page2() {
  return (
    <Paper>
      <Appbar title="订单" back style={{ background: 'black' }} />
      <h2>I'm Page2</h2>
      <Link to="sub">页面1</Link>
    </Paper>
  );
}
