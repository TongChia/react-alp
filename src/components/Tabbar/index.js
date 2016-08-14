import React from 'react'
import './styles.styl';

export default function Tabbar ({children}) {
  return (
    <div className="tabbar">
      {children}
    </div>
  );
}
