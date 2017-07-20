import React from 'react';
import {NativeRouter, Route, Switch} from 'react-router-native';
import Main from './main';
import Study from '../components/study';

export default RouterRoot = () => (
  <NativeRouter>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/counter" component={Study}/>
    </Switch>
  </NativeRouter>
)