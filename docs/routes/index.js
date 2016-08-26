import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Main from './Main';
import Home from './Home';
import { Page1, Page2 } from './Page';

export default function App() {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Main}>
        <IndexRoute components={{ children: Home }} />
        <Route path="sub" components={{ children: Home, subPage: Page1 }} />
        <Route path="sub2" components={{ children: Home, subPage: Page2 }} />
      </Route>
    </Router>
  );
}
