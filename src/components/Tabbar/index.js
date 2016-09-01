import React from 'react';
import './style.styl';

export default function Tabbar({ children }) {
  return (
    <div className="tabbar">
      {children}
    </div>
  );
}
