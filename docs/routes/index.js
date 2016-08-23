import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './Main';
import Home from './Home';
import Page1 from './Page1';

export default function App() {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Main}>
        <IndexRoute components={{ children: Home }} />
        <Route path="sub" components={{ children: Home, subPage: Page1 }} />
      </Route>
    </Router>
  );
}
