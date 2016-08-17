import React from 'react';
import Layout from 'components/Layout';
import Appbar from 'components/Appbar';

export default function Main({ children }) {
  return (
    <Layout>
      {children}
      <Appbar title="Home" />
    </Layout>
  );
}
