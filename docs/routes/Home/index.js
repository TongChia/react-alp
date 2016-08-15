import React from 'react';

import Appbar from 'components/Appbar';
import 'components/Appbar/Appbar.styl';

export default function Home() {
  return (
    <div className="layout">
      <Appbar title="Home" />
      <h1>Home</h1>
    </div>
  );
}
