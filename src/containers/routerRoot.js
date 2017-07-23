import React from 'react';
import {Router, Route, Switch} from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import Main from '../components/main';
import AllNote from '../components/allNote';
import Study from '../components/study';

const history = createHistory();

export default RouterRoot = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/allNote" component={AllNote}/>
      <Route path="/study" component={Study}/>
    </Switch>
  </Router>
)

export {history};