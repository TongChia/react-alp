import React from 'react';
import Appbar from 'components/Appbar';
import Button from 'components/Button';
import Paper from 'components/Paper';

export function Page1() {
  const rights = <div><Button clear label="查找" /></div>;
  return (
    <Paper>
      <Appbar title="Home" rights={rights} back />
      <h2>I'm Page1</h2>
    </Paper>
  );
}

export function Page2() {
  return (
    <Paper>
      <h2>I'm Page2</h2>
    </Paper>
  );
}
