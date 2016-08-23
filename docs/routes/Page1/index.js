import React from 'react';
import { Link } from 'react-router';

export default function Page1() {
  return (
    <div>
      <h2>I'm a sub Page</h2>
      <Link to="/">返回</Link>
    </div>
  );
}
