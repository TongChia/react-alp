//import '../styles/App.styl';
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Main from './Main';
import Home from './Home';

export default function App () {
  return (
    <Router history={browserHistory} >
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
      </Route>
    </Router>
  );
}
