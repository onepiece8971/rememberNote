/*import React, {Component} from 'react';
import { Provider } from 'react-redux';

import CounterApp from './counterApp';
import configureStore from '../store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
    );
  }
}*/

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated
} from 'react-native';
import Home from './home';
import Remember from './remember';
import {NativeRouter, Route, Link} from 'react-router-native'

import Svg,{Polygon} from 'react-native-svg';
import CS from '../css/convertSize';
import {
  MainView,
  OccupiedView,
  BottomNavView,
  BottomNavTopView,
  BottomNavTopSmallView,
  BottomNavFootView,
  BottomNavFootSmallView,
  BottomNavTopText,
  BottomNavMiddleText,
  BottomNavFootText,
  BottomNavFootSmallLink,
  MenuScrollView
} from '../css/styles';
import SideMenu from 'react-native-side-menu';
import reducer from '../reducers/home';

const store = createStore(reducer);

// 右侧滑动菜单
const Menu = () => (
  <MenuScrollView>
    <Link to="/">
      <Text>
        About
      </Text>
    </Link>
    <Link to="/remember">
      <Text>
        Contacts
      </Text>
    </Link>
  </MenuScrollView>
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <SideMenu
            menu={<Menu />}
            isOpen={false}
            menuPosition="right"
            openMenuOffset={CS.w(332)}
          >
            <MainView>
              <Route exact path="/" component={Home}/>
              <Route path="/remember" component={Remember}/>
              <OccupiedView />
              <BottomNavView>
                <BottomNavTopView>
                  <BottomNavTopSmallView>
                    <Svg width={CS.w(25)} height={CS.h(10)} viewBox="0 0 250 100">
                      <Polygon id="Triangle" points="125,0 0,100 250,100" fill="#6ABEA7" fillOpacity="0.87"/>
                    </Svg>
                  </BottomNavTopSmallView>
                </BottomNavTopView>
                <BottomNavFootView>
                  <Link to="/" component={TouchableOpacity}>
                    <BottomNavFootSmallView>
                      <BottomNavTopText>已抄笔记</BottomNavTopText>
                      <BottomNavMiddleText>10</BottomNavMiddleText>
                      <BottomNavFootText>抄笔记</BottomNavFootText>
                    </BottomNavFootSmallView>
                  </Link>
                  <BottomNavFootSmallView background="#6ABEA7">
                    <Svg width={CS.w(22)} height={CS.h(22)} viewBox="9 9 22 22">
                      <Polygon points="19 19 19 9 21 9 21 19 31 19 31 21 21 21 21 31 19 31 19 21 9 21 9 19" fill="#fff"
                               fillOpacity="0.87"/>
                    </Svg>
                  </BottomNavFootSmallView>
                  <Link to="/remember" component={TouchableOpacity}>
                    <BottomNavFootSmallView>
                      <BottomNavTopText>已背笔记</BottomNavTopText>
                      <BottomNavMiddleText>10</BottomNavMiddleText>
                      <BottomNavFootText>背笔记</BottomNavFootText>
                    </BottomNavFootSmallView>
                  </Link>
                </BottomNavFootView>
              </BottomNavView>
            </MainView>
          </SideMenu>
        </NativeRouter>
      </Provider>
    )
  }
};