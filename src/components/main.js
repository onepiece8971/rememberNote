import React  from 'react';
import {NativeRouter, Route} from 'react-router-native';
import {MainView} from '../css/styles';
import Menu from '../containers/menu'
import Top from '../containers/top';
import Bottom from './bottom';
import Home from './home';
import Remember from './remember';

export default Main = () => (
  <Menu>
    <NativeRouter>
      <MainView>
        <Top/>
        <Route exact path="/" component={Home}/>
        <Route path="/remember" component={Remember}/>
        <Bottom/>
      </MainView>
    </NativeRouter>
  </Menu>
)