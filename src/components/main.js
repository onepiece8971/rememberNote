import React  from 'react';
import {MainView} from '../css/styles';
import Menu from '../containers/menu'
import Top from '../containers/top';
import Bottom from '../containers/bottom';
import Home from './home';
import Remember from './remember';

export default Main = ({route}) => (
  <Menu>
    <MainView>
      <Top/>
      <MainRoute route={route} />
      <Bottom/>
    </MainView>
  </Menu>
)

const MainRoute = ({route}) => {
  switch (route) {
    case '/remember':
      return (<Remember/>);
      break;
    default:
      return (<Home/>);
      break;
  }
};