import React from 'react';
import Layout from 'components/Layout';
import Appbar from 'components/Appbar';
import Button from 'components/Button';
import Fragment from 'components/Fragment';

export default function Main({ children, subPage }) {
  const rights = <div><Button clear label="查找" /></div>;
  return (
    <Layout>
      {children}
      <Fragment action={'slide'} full>
        {subPage}
      </Fragment>
      <Appbar title="Home" rights={rights} back menu />
    </Layout>
  );
}
