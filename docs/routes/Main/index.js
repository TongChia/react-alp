import React from 'react';
import Layout from 'components/Layout';
import Appbar from 'components/Appbar';
import Button, { ButtonGroup } from 'components/Button';

export default function Main({ children }) {
  const lefts = <ButtonGroup><Button>菜单</Button><Button>查找</Button></ButtonGroup>;
  return (
    <Layout>
      {children}
      <Appbar title="Home" lefts={lefts} />
    </Layout>
  );
}
