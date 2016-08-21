import React from 'react';
import Layout from 'components/Layout';
import Appbar from 'components/Appbar';
import Button, { ButtonGroup } from 'components/Button';

export default function Main({ children }) {
  const lefts = <ButtonGroup><Button>菜单</Button><Button>查找</Button></ButtonGroup>;
  const rights = <div><Button clear label="查找"/></div>;
  return (
    <Layout>
      {children}
      <Appbar title="Home" lefts={lefts} rights={rights} back={true} />
    </Layout>
  );
}
